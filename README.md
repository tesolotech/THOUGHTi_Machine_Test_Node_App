# THOUGHTi_Machine_Test_Node_App

Nodejs app

- All data of json file are get imported on mongodb atlas account

# To run this application you have to follow below steps:

- clone the repository
- create dbconfig folder inside of root of app
- Next to create database.config.js inside the dbconfig folder
- In database.config.js file you have copy below code with your mongodb atlas account db url as url value

        module.exports = {
            url: ''
        }

- Make sure your url may correct.
- Next you need to install all dependency by writing npm i on terminal on cloning project.
- lastly you need to run application by npm start command.
