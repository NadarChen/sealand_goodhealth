var e = getApp(), n = e.Anim, t = (e.request, e.utils, e.dayjs, e.config), a = e.wxp;

n.Page({
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        list: [],
        bannerPath: t.cdnDomain + "/test-json/banner.png"
    },
    onLoad: function() {
        this.fetchData();
    },
    fetchData: function() {
        var e = this;
        wx.showLoading({
            title: "努力加载中...",
            mask: !0
        }), a.request({
            url: t.cdnDomain + t[t.env].wenzhenPath + "?t=" + Date.now()
        }).then(function(n) {
            wx.hideLoading();
            var t = n.data.data;
            t && t.length && e.setData({
                list: t
            });
        }).catch(function(e) {
            wx.hideLoading(), wx.showToast({
                title: "当前人数较多，请稍后再试",
                icon: "none"
            }), console.error(e);
        });
    },
    onTapAccess: function(e) {
        console.log("onTapAccess", e);
        var n = this, t = e.target.dataset.item, a = t.appId, o = t.label;
        a && wx.navigateToMiniProgram({
            appId: a,
            extraData: {
                fromTitle: "海陆安康",
                fromAppId: "wxbcd049b6eefc8008"
            },
            envVersion: "release",
            success: function(e) {
                wx.reportAnalytics("diagnosis_navigate", {
                    title: o,
                    appid: a,
                    phone: n.data.userInfo.phone || "",
                    openid: wx.getStorageSync("wx-openid") || ""
                }), console.log("打开小程序成功", e);
            }
        });
    }
});