const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('authors page');
});

module.exports = router;