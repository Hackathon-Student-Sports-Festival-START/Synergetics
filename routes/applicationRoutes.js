const express = require('express');
const router = express.Router();

// router.use('/admin', require('./admin'));

// router.get('/login', (req, res) => {
//     res.render('pages/admin/login');
// });

router.get('/form_order', (req, res) => {
    res.render('applicationForm');
});

module.exports = router;
