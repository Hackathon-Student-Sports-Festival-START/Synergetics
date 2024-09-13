const express = require('express');
const router = express.Router();

router.get('/medals', (req, res) => {
    res.render('medalsTable');
});

module.exports = router;
