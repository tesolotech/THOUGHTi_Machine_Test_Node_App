
module.exports = (app) => {
    const users = require('../controllers/managed-records.controller.js');

    app.get('/api/records', users.GetAllData);

}

