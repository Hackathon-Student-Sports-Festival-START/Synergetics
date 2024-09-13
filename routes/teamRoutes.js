const express = require('express');
const router = express.Router();

router.get('/team', (req, res) => {
    res.render('teamManagement');
});

module.exports = router;
