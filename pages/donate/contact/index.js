Page({
    onShareAppMessage: function() {},
    handlePrimaryTap: function() {
        wx.navigateTo({
            url: "/pages/donate/form/index"
        });
    },
    textPaste: function() {
        wx.setClipboardData({
            data: "2005 2022 0902 4902 302",
            success: function() {
                wx.showToast({
                    title: "复制成功",
                    icon: "none"
                });
            }
        });
    },
    Tel: function(e) {
        console.log(e), wx.makePhoneCall({
            phoneNumber: e.target.dataset.replyPhone
        });
    }
});