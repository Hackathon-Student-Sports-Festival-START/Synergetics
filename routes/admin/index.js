const express = require('express');
const router = express.Router({ mergeParams: true });
const UserController = require('#controllers/admin/userController')
const RoleController = require('#controllers/admin/roleController')

router.get('/admin/login', (req, res) => {
    res.render('admin/login');
});

router.get('/admin/role', RoleController.getRoles);
router.get('/admin/role/create', RoleController.getRoleCreate);
router.post('/admin/role/create', RoleController.postRoleCreate);
router.get('/admin/role/:role/edit', RoleController.getRole);

router.get('/admin/user', UserController.getUsers);
router.get('/admin/user/create', UserController.getUserCreate);
router.post('/admin/user/create', UserController.postUserCreate);
router.get('/admin/user/:user/edit', UserController.getUser);

module.exports = router;
