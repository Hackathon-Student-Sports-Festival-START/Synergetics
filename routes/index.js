const express = require('express');
const router = express.Router();

router.use(require('./admin'));
router.use(require('./scheduleRoutes'));
router.use(require('./login'));


// router.get('/login', (req, res) => {
//     res.render('pages/admin/login');
// });

router.get('/', (req, res) => {
    res.render('pages/home');
});

module.exports = router;
