require("./../config/index");

Date.prototype.format = function(e) {
    var t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var n in t) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
    return e;
}, module.exports = {
    chooseLocation: function() {
        return new Promise(function(e, t) {
            wx.getLocation({
                type: "gcj02",
                success: function(t) {
                    var n = t.latitude, o = t.longitude;
                    wx.chooseLocation({
                        latitude: n,
                        longitude: o,
                        scale: 18,
                        success: e,
                        fail: function(e) {
                            e.errMsg.includes("fail auth deny") && wx.showModal({
                                title: "无法获取定位",
                                content: "请先授权获取当前定位信息",
                                success: function(e) {
                                    e.confirm && wx.openSetting();
                                }
                            });
                        }
                    });
                },
                fail: function(e) {
                    e.errMsg.includes("fail auth deny") && wx.showModal({
                        title: "无法获取定位",
                        content: "请先授权获取当前定位信息",
                        success: function(e) {
                            e.confirm && wx.openSetting();
                        }
                    });
                }
            });
        });
    },
    navigateToWebview: function(e) {
        wx.navigateTo({
            url: "/pages/web-view/index?webUrl=" + encodeURIComponent(e)
        });
    }
};