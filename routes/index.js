const express = require('express');
const controller = require('./controller/controller');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', controller.index);

router.get('/join', isNotLoggedIn, controller.join_route);

router.get('/auth', controller.login_route);

router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;

  