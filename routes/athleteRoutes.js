const express = require('express');
const router = express.Router();

router.get('/athlete', (req, res) => {
    res.render('athleteProfile');
});

module.exports = router;
