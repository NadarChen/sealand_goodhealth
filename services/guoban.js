var t = getApp(), a = t.request;

t.config, t.utils;

exports.guoban = function(t) {
    return a({
        url: "/authentication/realnameWxAut/v1/pushdata",
        method: "POST",
        data: t
    });
};