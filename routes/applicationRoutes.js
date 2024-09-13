const express = require('express');
const router = express.Router();

router.get('/application', (req, res) => {
    res.render('applicationForm');
});

module.exports = router;
