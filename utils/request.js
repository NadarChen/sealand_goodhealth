function e(o) {
    var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    return 0 === s ? Promise.reject(null) : new Promise(function(a, d) {
        c().then(function(e) {
            return r.request(n({}, o, {
                url: t(o.url),
                header: n({}, o.header, {
                    sessionid: e,
                    appid: i,
                    "X-ACCESS-TOKEN": wx.getStorageSync("wx-accesstoken")
                }),
                timeout: o.timeout || 15e3
            }));
        }).then(function(t) {
            t.statusCode;
            var n = t.data, r = n.errcode;
            return [ 110001005, 110001004, -1 ].includes(r) ? (wx.removeStorageSync("wx-sessionid"), 
            wx.removeStorageSync("wx-accesstoken"), e(o, s - 1).then(a)) : 0 === r ? a(n.data) : (n.errmsg && wx.showToast({
                title: n.errmsg,
                icon: "none"
            }), console.log(n.errmsg), d(n));
        }).catch(function() {
            return u || (u = !0, wx.showModal({
                title: "温馨提示",
                content: "当前人数较多，请稍后再试",
                showCancel: !1,
                success: function() {
                    u = !1;
                }
            })), d(null);
        });
    });
}

function t(e) {
    return 0 === e.indexOf("http") ? e : "" + s + e;
}

var n = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
}, r = require("./wx-promise"), o = require("../config/index"), s = o.domain, i = o.appid, c = require("./session").getSessionId, u = !1;

module.exports = {
    request: e
};