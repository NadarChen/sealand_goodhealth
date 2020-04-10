Page({
    data: {
        msgTitle: "",
        msgStatus: "",
        msgDesc: ""
    },
    onLoad: function(a) {
        var t = a.tag;
        void 0 === t || "1" === t ? this.setData({
            msgTitle: "提交成功",
            msgStatus: "success",
            msgDesc: "请等待通知"
        }) : "2" === t && this.setData({
            msgTitle: "提交失败",
            msgStatus: "warn",
            msgDesc: "请稍后再次尝试"
        });
    },
    onShareAppMessage: function() {},
    handlePrimaryTap: function() {
        wx.reLaunch({
            url: "/pages/stat/index"
        });
    },
    handleSecondTap: function() {
        wx.redirectTo({
            url: "/pages/donate/form/index"
        });
    },
    handleNav: function(a) {
        console.log(a);
        var t = a.currentTarget.dataset.index;
        "1" === t ? wx.navigateBack({
            delta: 2
        }) : "2" === t && wx.navigateBack({
            delta: 1
        });
    }
});