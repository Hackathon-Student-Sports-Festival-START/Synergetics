const express = require('express');
const router = express.Router();

// router.use('/admin', require('./admin'));

// router.get('/login', (req, res) => {
//     res.render('pages/admin/login');
// });

router.get('/', (req, res) => {
    res.render('pages/home');
});

module.exports = router;
