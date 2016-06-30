//微信相关
// var config = require('../config');
var config_wechat = AppConfig.site.wechat;
var domain = config_wechat.domain;
var app_id = config_wechat.app_id;
var app_secret = config_wechat.app_secret;

// 微信授权和回调
var OAuth = require('wechat-oauth');
var client = new OAuth(app_id, app_secret);

//获取微信code
exports.toWechat = function(req, res, next) {
    var url = client.getAuthorizeURL('http://' + domain + '/weixin/callback','','snsapi_userinfo');
    console.log("wechat url:"+url);
    res.redirect(url)
}

//微信获取openid回调
exports.wechatCallBack = function(req,res,next){
    console.log('----weixin callback -----')
    var code = req.query.code;
    client.getAccessToken(code, function (err, result) {
        console.dir(err)
        console.dir(result)
        var accessToken = result.data.access_token;
        var openid = result.data.openid;
        console.log('token=' + accessToken);
        console.log('openid=' + openid);
        //根据openid查找用户是否注册，如果注册就自动登录，如果未注册，就跳转到手机号码绑定页面
        res.redirect("/");
    });
}
