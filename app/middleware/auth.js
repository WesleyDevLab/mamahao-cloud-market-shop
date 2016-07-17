/**
 * Created by Administrator on 2016/6/12.
 */
//登录验证
exports.requiredAuthentication = function (req, res, next) {
    if (req.session.user) {
        next();
    } else {
        var isWeChat = false;//验证是否是微信浏览器
        var userAgent = req.header("user-agent").toLowerCase();
        if (userAgent.indexOf("micromessenger") > 0) {// 是微信浏览器
            isWeChat = true;
        }
        console.log("isWeChat:" + isWeChat);
        if (isWeChat) {
            res.redirect('/account/bind');
        } else {
            req.session.error = 'Access denied!';
            res.redirect('/login');
        }
    }
};