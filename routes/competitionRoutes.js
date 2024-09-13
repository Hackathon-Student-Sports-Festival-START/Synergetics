const express = require('express');
const router = express.Router();

router.get('/competition', (req, res) => {
    res.render('competitionGrid');
});

module.exports = router;
