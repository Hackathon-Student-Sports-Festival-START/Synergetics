const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/admin/login', (req, res) => {
    res.render('admin/login');
});

router.get('/admin/user', (req, res) => {
    res.render('pages/admin/user/index');
});

router.get('/admin/user/:user/edit', (req, res) => {
    res.render('pages/admin/user/edit');
});

module.exports = router;
