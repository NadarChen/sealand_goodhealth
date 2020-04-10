require("../../../services/health-code.js");

var e = getApp(), n = e.Anim;

e.userStore, e.config;

n.Page({
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        info: null,
        source: null
    },
    onLoad: function(e) {
        e.info && this.setData({
            info: JSON.parse(e.info)
        }), e.source && this.setData({
            source: e.source
        }), e.isFromBuy && this.setData({
            isFromBuy: e.isFromBuy
        });
    },
    handlePrimaryTap: function(e) {
        wx.navigateTo({
            url: "/packages/buy/pages/notice/index"
        });
    },
    handleSecondTap: function(e) {
        wx.reLaunch({
            url: "/pages/stat/index"
        });
    }
});