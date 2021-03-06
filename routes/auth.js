const express  = require('express');
const passport = require('passport');
const bcrypt   = require('bcrypt');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.post('/join', isNotLoggedIn, async (req, res, next) => {
    const { user_id, password, name, email, age} = req.body;
    try {
        const exUser = await User.findOne({ where: { user_id } });
        if(exUser){
            return res.redirect('/join?joinError=이미 가입된 이메일입니다.');
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            user_id,
            password: hash,
            name,
            email,
            age,
        });
        return res.redirect('/');
    }catch(error){
        console.error(error);
        return next(error);
    }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if(authError){
            console.error(authError);
            return next(error);
        }
        if(!user){
            return res.redirect(`/?loginError=${info.message}`);
        }
        return req.login(user, (loginError) => {
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req, res, next);
});

module.exports = router;

