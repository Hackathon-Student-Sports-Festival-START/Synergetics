const sequelize = require('#config/database');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;

sequelize
    .sync()
    .then(() => {
        app.listen(3000, function () {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.log(err));
