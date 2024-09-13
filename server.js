const sequelize = require('#config/database');
const express = require('express');
const path = require('node:path');

const app = express();

app.set('view engine', 'ejs');

const resolve = (...paths) => path.resolve(__dirname, ...paths);

app.use(express.static(resolve('./public'), { index: false }));

app.use(require('#routes/index'))

const PORT = process.env.PORT || 3000;

// sequelize
//     .sync()
//     .then(() => {
        app.listen(PORT, function () {
            console.log(`Server is running on port ${PORT}`);
        });
    // })
    // .catch(err => console.log(err));
