const express = require('express');
const router = express.Router();

let currentYear = new Date().getFullYear();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home', currentYear });
});

module.exports = router;