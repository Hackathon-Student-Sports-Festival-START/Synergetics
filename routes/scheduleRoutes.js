const express = require('express');
const router = express.Router();

router.get('/schedule', (req, res) => {
    res.render('views/shedule');
});

module.exports = router;
