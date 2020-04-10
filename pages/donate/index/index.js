Page({
    onShareAppMessage: function() {},
    handlePrimaryTap: function() {
        wx.navigateTo({
            url: "/pages/donate/contact/index"
        });
    }
});