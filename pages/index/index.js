var e = getApp(), a = e.Anim, t = (e.request, e.dayjs, e.wxp, e.utils), i = e.config, n = e.userStore, s = require("../../services/index"), o = require("../../utils/util").navigateToWebview, r = require("../../services/health-code.js"), c = require("../../services/league"), u = i.domain + "/kylm", l = require("../../services/guoban");

a.Page({
    store: function(e) {
        return {
            isAuth: e.user.userInfo.isAuth,
            userInfo: e.user.userInfo
        };
    },
    computed: {
        isMore: function() {
            var e = 0;
            return [ this.data.isCard, this.data.isMedicareCard, this.data.isSecurityCard ].forEach(function(a) {
                1 == a && e++;
            }), !(e > 1);
        },
        isNew: function() {
            var e = wx.getStorageSync("isNew");
            return null == e || "" === e ? wx.setStorageSync("isNew", 0) : wx.setStorageSync("isNew", ++e), 
            parseInt(wx.getStorageSync("isNew") || 0) < 1;
        }
    },
    data: {
        isAction: !1,
        openid: wx.getStorageSync("wx-openid"),
        visibleSq: !1,
        isCard: i.isCard,
        isMedicareCard: i.isMedicareCard,
        isSecurityCard: i.isSecurityCard,
        isCardFlag: !1,
        cardInfo: {},
        cityName: i.cityName,
        isShowBg: !0,
        visible: !1,
        value: i.cityName,
        residentCount: 0,
        communistCount: 0,
        floatingCount: 0,
        endTime: "",
        todayCount: 0,
        confirm: 0,
        suspect: 0,
        cure: 0,
        dead: 0,
        lineVisible: !1,
        singleLine: {
            xAxis: {
                data: []
            },
            series: [ {
                name: "确诊人数",
                data: [],
                label: {
                    normal: {
                        show: !0
                    }
                }
            } ]
        },
        epidemicData: {
            confirm: 0,
            suspect: 0,
            dead: 0,
            heal: 0,
            lastUpdateTime: ""
        },
        statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
        guobanlist: [ {
            bgColor: "#F0F2FD",
            src: "../../images/guoban/tongxingmijiezicha@2x.png",
            title: "同行密接自查",
            tips: "是否有确诊患者同行，一键查询",
            isNew: !0,
            url: "/pages/index/index?navToPath=/fangkongfuwu/pages/ConfirmedOrSuspectedCaseShareSelfCheck/fillInfo/fillInfo&eid=YQ_WJW_TXZXFW,GSS_YQ"
        }, {
            bgColor: "#FFF5F4",
            src: "../../images/guoban/dingdianyiyuanchaxun@2x.png",
            title: "定点医院查询",
            tips: "查询新冠肺炎疑似或确诊孕产妇定点医院",
            url: "/pages/index/index?navToPath=/fangkongfuwu/pages/maternityHospital/fillInfo/fillInfo&eid=YQ_WJW_YFDDYY,GSS_YQ"
        }, {
            bgColor: "#EFF9F7",
            src: "../../images/guoban/yiyongkouzhaochaxun@2x.png",
            title: "医用口罩查询",
            tips: "查询医用口罩注册备案号",
            url: "/pages/index/index?navToPath=/fangkongfuwu/pages/medicalMasks/index&eid=YQ_YJJ_YYKZCX,GSS_YQ"
        }, {
            bgColor: "#F0F2FD",
            src: "../../images/guoban/yiliaojigouchaxun@2x.png",
            title: "医疗机构查询",
            tips: "查询医疗机构执业信息",
            url: "/pages/index/index?navToPath=/weijianwei/pages/medicalInstitutionInfoQuery/fillInfo/fillInfo&eid=YQ_WJW_YLJGZYDJXX,GSS_YQ"
        } ]
    },
    navigateToWebview: function(e) {
        console.log("e", e);
        var a = e.currentTarget.dataset.url;
        o(a + "&ts=" + new Date().getTime());
    },
    onShareAppMessage: function() {},
    onHide: function() {
        this.setData({
            isAction: !0
        });
    },
    closePoplayer: function(e) {
        console.log(e), this.setData({
            visibleSq: !1
        });
    },
    closeCancel: function() {
        this.setData({
            visibleSq: !1
        }), this.isCardFlag(!1, this.jumpProgram);
    },
    onLoad: function(e) {
        var a = this;
        s.fetchOverviewData().then(function(e) {
            var t = JSON.parse(e.data.data);
            t.lastUpdateTime = t.lastUpdateTime.replace(/-/g, "/"), a.setData({
                epidemicData: t
            });
        }).catch(function(e) {
            console.log("e", e), wx.showToast({
                title: "疫情数据请求失败，请稍后再试",
                icon: "none"
            });
        }), n.fetchUserInfo(), this.getAnitEpidemicAllianceData();
    },
    onPageScroll: function(e) {
        console.log("e", e);
        var a = parseInt(e.scrollTop) < 80;
        this.setData({
            isShowBg: a
        });
    },
    onTapAccess: function(e) {
        if (n.checkAuth()) if (e.currentTarget.dataset.real) r.realnameUser(this.data.userInfo.uid).then(function(a) {
            0 == a.isAut ? wx.showModal({
                title: "未实名",
                content: "是否需要实名认证？",
                confirmColor: "#1890ff",
                success: function(a) {
                    a.cancel || wx.navigateTo({
                        url: "/packages/health-code/pages/realname-submit/index?path=" + e.currentTarget.dataset.url
                    });
                }
            }) : wx.navigateTo({
                url: e.currentTarget.dataset.url
            });
        }); else {
            var a = e.currentTarget.dataset.id;
            wx.navigateTo({
                url: t.urlJoinParams(e.currentTarget.dataset.url, {
                    id: a
                })
            });
        }
    },
    isCardFlag: function(e, a) {
        var t = this;
        r.healthycardAuth(e).then(function(e) {
            e && (t.setData({
                cardInfo: e.message
            }), a(e.message));
        });
    },
    get_uuid: function() {
        for (var e = [], a = 0; a < 36; a++) e[a] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
        return e[14] = "4", e[19] = "0123456789abcdef".substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", 
        e.join("");
    },
    okCardFlag: function(e) {
        this.setData({
            visibleSq: !1
        }), this.isCardFlag(!0, this.jumpProgram);
    },
    openCard: function(e) {
        var a = this;
        n.checkAuth() && r.healthyAuthState().then(function(e) {
            e.state ? (console.log(e), a.jumpProgram(e.message)) : a.setData({
                visibleSq: !0
            });
        });
    },
    jumpProgram: function(e) {
        var a = this, t = "pages/index?redirect_uri=/pages/serviceList", n = "wx917c4713d3f2396f";
        e && (t = "pages/index?redirect_uri=/pages/serviceList&params=" + e + "&hospitalId=" + i.provinceCode + "&ts=" + new Date().getTime()), 
        "30824" == i.provinceCode ? n = "wx917c4713d3f2396f" : "30822" == i.provinceCode ? n = "wx8dea7ce3dd2add52" : "30846" == i.provinceCode && (n = "wx8926192b8797180f"), 
        wx.navigateToMiniProgram({
            appId: n,
            path: t,
            envVersion: "trial",
            success: function() {},
            fail: function() {
                console.log(a);
            }
        });
    },
    toMiniProgramSuccess: function() {
        console.log("success");
    },
    toMiniProgramFail: function(e) {
        console.error("跳转小程序失败", e);
    },
    getAnitEpidemicAllianceData: function() {
        var e = this;
        c.getHomeList().then(function(a) {
            for (var t in a.program) a.program[t].iconUrl = u + a.program[t].iconUrl;
            e.setData({
                leagueList: a.program
            });
        });
    },
    handleGuoBan: function(e) {
        var a = e.currentTarget.dataset.item;
        this.setData({
            isAction: !0
        }), wx.showLoading({
            title: "请稍候"
        }), l.guoban().then(function(e) {
            wx.hideLoading(), wx.navigateToMiniProgram({
                appId: "wx2eec5fb00157a603",
                path: a.url,
                extraData: {
                    tokensno: e
                },
                success: function() {
                    console.log(arguments);
                }
            });
        }).catch(function() {
            wx.hideLoading(), wx.showToast({
                title: "获取用户数据失败，请重试",
                icon: "none"
            });
        });
    }
});