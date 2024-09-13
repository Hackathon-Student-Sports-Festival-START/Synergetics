const express = require('express');
const router = express.Router();

router.use(require('./admin'));
router.use(require('./applicationRoutes'));
router.use(require('./athleteRoutes'));
router.use(require('./competitionRoutes'));
router.use(require('./loginRoutes'));
router.use(require('./medalsRoutes'));
router.use(require('./mediaRoutes'));
router.use(require('./scheduleRoutes'));
router.use(require('./teamRoutes'));


// router.get('/login', (req, res) => {
//     res.render('pages/admin/login');
// });

router.get('/', (req, res) => {
    res.render('pages/home');
});

module.exports = router;
