const express = require('express');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('notice/list', { title: '공지사항' });
});

module.exports = router;