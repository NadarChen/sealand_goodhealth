var e = getApp(), o = e.request, t = e.config, n = e.utils;

exports.goFeedback = function(e, i) {
    o({
        url: t[t.env].buyDomain + "/aisee/urlData",
        method: "GET",
        data: {
            userid: i,
            type: e
        }
    }).then(function(e) {
        wx.hideLoading(), wx.navigateTo({
            url: n.urlJoinParams("/pages/web-view/index", {
                webUrl: encodeURIComponent("https://h5.aisee.qq.com/index?" + e),
                title: "帮助与反馈"
            })
        }), console.log("res", e);
    }).catch(function(e) {
        wx.showModal({
            title: "温馨提示",
            content: "服务器拥挤，请稍后再试",
            showCancel: !1
        }), wx.hideLoading(), console.log("err", e);
    });
};