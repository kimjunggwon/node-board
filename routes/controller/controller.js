exports.index = (req, res, next) => {
    res.render('index', { title: 'Express' });
};

exports.join_route = (req, res, next) => {
    res.render('member/join', { title: '회원가입' });
};

exports.login_route = (req, res,next) => {
    res.render('member/login', { title: '로그인' });
};