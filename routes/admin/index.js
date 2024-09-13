const express = require('express');
const router = express.Router({ mergeParams: true });
const UserController = require('#controllers/admin/userController')

router.get('/admin/login', (req, res) => {
    res.render('admin/login');
});

router.get('/admin/user', UserController.getUsers);

router.get('/admin/user/:user/edit', (req, res) => {
    res.render('pages/admin/user/edit');
});

module.exports = router;
