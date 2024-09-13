const express = require('express');
const router = express.Router();

router.get('/media', (req, res) => {
    res.render('mediaGallery');
});

module.exports = router;
