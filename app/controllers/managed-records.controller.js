
const mongoose = require('mongoose');
const Data = require('../models/managed-records.model.js');

//Get all Users
exports.GetAllData = (req, res) => {
    let limit = req.query.limit && req.query.limit <= 10 ? parseInt(req.query.limit) : 100;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    Data.find()
        .skip(limit * page)
        .limit(limit)
        .then(result => {
            let Ids = [];
            let Open = [];
            let ClosedCount = 0;
            if (result.length > 0) {
                result.forEach((item) => {
                    Ids.push(item._id);

                    if (item.disposition === "open") {
                        Open.push(item);
                    }

                    if (item.disposition === "closed" && item.color === "primary") {
                        ClosedCount++;
                    }

                })

            }

            let response = {
                status: 200,
                message: "SUCCESS",
                Ids,
                Open,
                ClosedCount,
                PreviousPage: page == 0 ? null : page,
                NextPage: page + 1

            }


            res.status(200).send(response);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};
