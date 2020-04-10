function e(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

function a() {
    return {
        openid: wx.getStorageSync("wx-openid"),
        sessionid: wx.getStorageSync("wx-sessionid")
    };
}

function t(e) {
    return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e);
}

function n(e) {
    return e ? d(e).format("YYYY-MM-DD") : e;
}

function i() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", a = e.length, t = "";
    return 15 === a ? t = "19".concat(e.substr(6, 6)) : 18 === a && (t = e.substr(6, 8)), 
    t;
}

function o() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", a = e.length, t = "";
    return 15 == a ? t = parseInt(e.substr(14, 1)) % 2 == 1 ? "男" : "女" : a >= 17 && (t = parseInt(e.substr(16, 1)) % 2 == 1 ? "男" : "女"), 
    t;
}

var s, r = Object.assign || function(e) {
    for (var a = 1; a < arguments.length; a++) {
        var t = arguments[a];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
}, m = getApp(), l = m.Anim, c = (m.Event, m.resetTab), u = m.config, d = m.dayjs, g = m.request, h = m.systemInfo, f = (m.userStore, 
require("../../../utils/util").chooseLocation), D = require("../../../services/report"), v = require("../../../services/region"), y = require("../../../services/health-code.js"), p = [ {
    name: "北京",
    ename: "beijing"
}, {
    name: "天津",
    ename: "tianjin"
}, {
    name: "上海",
    ename: "shanghai"
}, {
    name: "重庆",
    ename: "chongqing"
}, {
    name: "中国香港",
    ename: "xianggang"
}, {
    name: "中国澳门",
    ename: "aomen"
}, {
    name: "河北",
    ename: "hebei"
}, {
    name: "山西",
    ename: "shanxi"
}, {
    name: "内蒙古",
    ename: "neimenggu"
}, {
    name: "辽宁",
    ename: "liaoning"
}, {
    name: "吉林",
    ename: "jilin"
}, {
    name: "黑龙江",
    ename: "heilongjiang"
}, {
    name: "江苏",
    ename: "jiangsu"
}, {
    name: "浙江",
    ename: "zhejiang"
}, {
    name: "安徽",
    ename: "anhui"
}, {
    name: "福建",
    ename: "fujian"
}, {
    name: "江西",
    ename: "jiangxi"
}, {
    name: "山东",
    ename: "shandong"
}, {
    name: "河南",
    ename: "henan"
}, {
    name: "湖北",
    ename: "hubei"
}, {
    name: "湖南",
    ename: "hunan"
}, {
    name: "广东",
    ename: "guangdong"
}, {
    name: "广西",
    ename: "guangxi"
}, {
    name: "海南",
    ename: "hainan"
}, {
    name: "四川",
    ename: "sichuan"
}, {
    name: "贵州",
    ename: "guizhou"
}, {
    name: "云南",
    ename: "yunnan"
}, {
    name: "西藏",
    ename: "xizang"
}, {
    name: "陕西",
    ename: "shanxi1"
}, {
    name: "甘肃",
    ename: "gansu"
}, {
    name: "青海",
    ename: "qinghai"
}, {
    name: "宁夏",
    ename: "ningxia"
}, {
    name: "新疆",
    ename: "xinjiang"
}, {
    name: "中国台湾",
    ename: "taiwan"
} ], C = [ {
    name: "北京",
    ename: "beijing"
}, {
    name: "天津",
    ename: "tianjin"
}, {
    name: "上海",
    ename: "shanghai"
}, {
    name: "重庆",
    ename: "chongqing"
}, {
    name: "河北",
    ename: "hebei"
}, {
    name: "山西",
    ename: "shanxi"
}, {
    name: "内蒙古",
    ename: "neimenggu"
}, {
    name: "辽宁",
    ename: "liaoning"
}, {
    name: "吉林",
    ename: "jilin"
}, {
    name: "黑龙江",
    ename: "heilongjiang"
}, {
    name: "江苏",
    ename: "jiangsu"
}, {
    name: "浙江",
    ename: "zhejiang"
}, {
    name: "安徽",
    ename: "anhui"
}, {
    name: "福建",
    ename: "fujian"
}, {
    name: "江西",
    ename: "jiangxi"
}, {
    name: "山东",
    ename: "shandong"
}, {
    name: "河南",
    ename: "henan"
}, {
    name: "湖北",
    ename: "hubei"
}, {
    name: "湖南",
    ename: "hunan"
}, {
    name: "广东",
    ename: "guangdong"
}, {
    name: "广西",
    ename: "guangxi"
}, {
    name: "海南",
    ename: "hainan"
}, {
    name: "四川",
    ename: "sichuan"
}, {
    name: "贵州",
    ename: "guizhou"
}, {
    name: "云南",
    ename: "yunnan"
}, {
    name: "西藏",
    ename: "xizang"
}, {
    name: "陕西",
    ename: "shanxi1"
}, {
    name: "甘肃",
    ename: "gansu"
}, {
    name: "青海",
    ename: "qinghai"
}, {
    name: "宁夏",
    ename: "ningxia"
}, {
    name: "新疆",
    ename: "xinjiang"
}, {
    name: "中国香港",
    ename: "xianggang"
}, {
    name: "中国澳门",
    ename: "aomen"
}, {
    name: "中国台湾",
    ename: "taiwan"
}, {
    name: "国外",
    ename: "guowai"
} ];

l.Page({
    store: function(e) {
        return {
            userInfo: e.user.userInfo
        };
    },
    data: {
        pdfUrl: "https://imgcache.gzonline.gov.cn/doc/Report_Health_Condition_Instructions.pdf",
        imgSrc: "/images/report/caozuozhiyin.png",
        fileName: "Report Health Condition Instructions.pdf",
        currentType: "",
        regionData: [],
        today: d().format("YYYY-MM-DD"),
        startDay: d().subtract(130, "year").format("YYYY-MM-DD"),
        halfMonthAgo: d().subtract(15, "day").format("YYYY-MM-DD"),
        cityName: u.cityName,
        headers: {},
        activeTab: "self",
        showHBCityPicker: !1,
        showRegionPicker: !1,
        uploadUrl: u.domain + "/report/uploadfile",
        identityInputType: "idcard",
        disableDetail: !0,
        provinceIncludes: [ "中国香港", "广东省" ],
        regionRange: [],
        sexRange: [ {
            name: "男",
            value: "男"
        }, {
            name: "女",
            value: "女"
        } ],
        nationRange: [ {
            name: "中国大陆",
            value: 1
        }, {
            name: "中国港澳台地区",
            value: 2
        }, {
            name: "外国",
            value: 3
        } ],
        domicilePlaceRange: [ {
            name: "汕尾市",
            value: 1
        }, {
            name: "广东其他地市",
            value: 2
        }, {
            name: "湖北省",
            value: 3
        }, {
            name: "其他",
            value: 4
        } ],
        nativePlaceRange: function() {
            var e = [];
            return p.map(function(a) {
                e.push({
                    name: a.name,
                    value: a.name
                });
            }), e;
        }(),
        residentPlaceItems: function() {
            var e = [];
            return C.map(function(a) {
                e.push({
                    name: a.name,
                    value: a.name
                });
            }), e;
        }(),
        cardTypeRange: [ {
            name: "身份证",
            value: 1
        }, {
            name: "军官证",
            value: 4
        }, {
            name: "护照",
            value: 3
        }, {
            name: "港澳居民来往内地通行证",
            value: 8
        }, {
            name: "台湾居民来往内地通行证",
            value: 9
        }, {
            name: "港澳居民居住证",
            value: 6
        }, {
            name: "台湾居民居住证",
            value: 7
        }, {
            name: "出入境通行证",
            value: 11
        } ],
        residentFlagItems: [ {
            name: "是，在汕尾居住了已有半年以上",
            value: 1
        }, {
            name: "否，我是临时来汕尾的",
            value: 2
        } ],
        residentConditionItems: [ {
            name: "一直在汕尾3个月或以上",
            value: 1
        }, {
            name: "来或返回汕尾超过14日",
            value: 2
        }, {
            name: "来或返回汕尾不超过14日（含14日）",
            value: 3
        }, {
            name: "目前仍在外地",
            value: 4
        } ],
        travelRegionClassItems: [ {
            name: "武汉市",
            value: 1
        }, {
            name: "湖北（不含武汉）",
            value: 2
        }, {
            name: "温州市",
            value: 6
        }, {
            name: "中国大陆其他省(自治区)市",
            value: 4
        }, {
            name: "中国港澳台地区",
            value: 3
        }, {
            name: "国外",
            value: 5
        } ],
        personTypeItems: [ {
            name: "未返汕尾本地常住居民",
            value: 1,
            desc: "在2020-1-1之后一直没返汕尾的本地常住居民。"
        }, {
            name: "持续在汕尾人员",
            value: 2,
            desc: "于2020-1-1之前到目前一直在汕尾人员。"
        }, {
            name: "一月初返汕尾居民",
            value: 3,
            desc: "在2020-1-1至2020-1-15间返汕尾本地常住居民。"
        }, {
            name: "一月初来汕尾人员",
            value: 4,
            desc: "在2020-1-1至2020-1-15间来汕尾外地临时人员。"
        }, {
            name: "一月中返汕尾居民",
            value: 5,
            desc: "于2020-1-15后返汕尾本地常住居民。"
        }, {
            name: "一月中来汕尾人员",
            value: 6,
            desc: "于2020-1-15后来汕尾外地临时人员。"
        }, {
            name: "居家医学观察人员 ",
            value: 11
        }, {
            name: "集中医学观察人员 ",
            value: 12
        } ],
        symptomItems: [ {
            name: "自觉正常",
            value: 1
        }, {
            name: "发热37.3 ℃以下",
            value: 11
        }, {
            name: "发热37.3 ℃（含）以上",
            value: 12
        }, {
            name: "干咳",
            value: 13
        }, {
            name: "乏力",
            value: 14
        }, {
            name: "其他症状",
            value: 15
        } ],
        socialContactItems: [ {
            name: "14日内密切接触近期有湖北旅居史者",
            value: 1,
            desc: "近期有湖北旅居史者指：14日内来自湖北和去过湖北的人员"
        }, {
            name: "自我感觉14日内曾与患者接触过者",
            value: 2,
            desc: "近期与确诊患者有接触，如乘搭同一交通工具等情况"
        } ],
        healthStateItems: [ {
            name: "正常活动",
            value: 1,
            desc: "自觉正常无不适症状"
        }, {
            name: "居家健康服务",
            value: 2,
            desc: "汕尾有固定住处，在家自我健康观察"
        }, {
            name: "集中健康服务",
            value: 3,
            desc: "汕尾无固定住处，如住酒店等实施集中健康观察"
        }, {
            name: "集中医学观察",
            value: 4,
            desc: "在医疗机构医学观察"
        } ],
        showNativePlacePicker: !1,
        agree: !1,
        isCreateCard: !0,
        isCreateFlag: !0,
        selfForm: {
            username: "",
            gender: "",
            isChinese: 1,
            nativePlace: "",
            domicilePlace: "",
            phone: "",
            birthday: "",
            identity: "",
            identityType: 1,
            street: "",
            addr: "",
            residentFlag: "",
            residentCondition: "",
            returnDate: "",
            recentRegionName: "",
            travelRegionClass: "",
            socialContact: "",
            socialContact1: "",
            socialContact2: "",
            quasiReturnDate: "",
            contactDateRecent: "",
            contactDateLike: "",
            healthState: "",
            symptoms: [],
            symptomDscr: "",
            regionData: [],
            clueType: 0
        },
        selfFormRules: {
            symptomDscr: [ {
                type: "symptomDscrLength",
                message: "其他症状描述不超过10个汉字"
            } ],
            username: [ {
                type: "required",
                message: "请输入姓名"
            } ],
            personType: [ {
                type: "required",
                message: "请选择人员类型"
            } ],
            phone: [ {
                type: "required",
                message: "请输入中国大陆手机号码"
            }, {
                type: "mobile",
                message: "请输入中国大陆手机号码"
            } ],
            identityType: [ {
                type: "required",
                message: "请选择证件类型"
            } ],
            identity: [ {
                type: "required",
                message: "请输入证件号码"
            }, {
                type: "id",
                message: "请输入正确的身份证号码"
            } ],
            birthday: [ {
                type: "required",
                message: "请选择出生日期"
            }, {
                type: "birthdayLength",
                message: "请选择正确的出生日期"
            } ],
            street: [ {
                type: "required",
                message: "请选择居住地址"
            } ],
            addr: [ {
                type: "required",
                message: "请输入详细住址"
            } ],
            gender: [ {
                type: "required",
                message: "请选择性别"
            } ],
            residentFlag: [ {
                type: "required",
                message: "请选择是否常住汕尾"
            } ],
            residentCondition: [ {
                type: "required",
                message: "请选择近期是否在汕尾"
            } ],
            healthState: [ {
                type: "required",
                message: "请选择个人健康现状"
            } ]
        },
        validateType: {
            symptomDscrLength: function(e) {
                return e.length <= 10;
            },
            contentLength: function(e) {
                return e.length > 10;
            },
            titleLength: function(e) {
                return e.length <= 20;
            },
            checkBirthday: function(e) {
                if (!birthday) return !1;
                var a = d().diff(d(e).format("YYYY-MM-DD"), "year");
                return a >= 0 && a <= 130;
            }
        }
    },
    bindSelectData: function(e) {
        this.setData({
            "selfForm.addr": e.detail.address
        });
    },
    watch: (s = {
        "selfForm.isChinese": function(e) {
            console.log(e), 2 == e ? this.setData({
                "selfForm.domicilePlace": ""
            }) : 3 == e && this.setData({
                "selfForm.domicilePlace": "",
                "selfForm.nativePlace": ""
            });
        },
        selfForm: function(e) {
            console.log("selfForm Data Change", e);
        },
        "selfForm.identityType": function(e) {
            var a = this.data.selfFormRules || [], t = "text";
            switch (parseInt(e)) {
              case 1:
                t = "idcard", a.identity[1] = {
                    type: "id",
                    message: "请输入正确的身份证号码"
                };
                break;

              case 5:
                a.identity[1] = {
                    type: "twCome",
                    message: "请输入正确的证件号码"
                };
                break;

              case 6:
              case 7:
                a.identity[1] = {
                    type: "hmHid",
                    message: "请输入正确的证件号码"
                };
                break;

              default:
                a.identity = a.identity.slice(0, 1);
            }
            this.setData({
                identityInputType: t,
                selfFormRules: a
            });
        },
        "selfForm.symptoms": function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], a = -1 === e.indexOf("15"), t = e.slice(-1)[0], n = !1;
            if (1 != t ? e.forEach(function(a, t) {
                1 == a && (e.splice(t, 1), n = !0);
            }) : e.forEach(function(a, t) {
                1 != a && (e = [ "1" ], n = !0);
            }), 11 == t) {
                var i = e.indexOf("12");
                i > -1 && (e.splice(i, 1), n = !0);
            } else if (12 == t) {
                var o = e.indexOf("11");
                o > -1 && (e.splice(o, 1), n = !0);
            }
            n && this.setData({
                "selfForm.symptoms": e
            });
            var s = [];
            a ? this.setData({
                "selfForm.symptomDscr": ""
            }) : s = [ {
                type: "required",
                message: "请输入其他症状"
            }, {
                type: "symptomDscrLength",
                message: "其他症状描述不超过10个汉字"
            } ], this.setData({
                disableDetail: a,
                "selfFormRules.symptomDscr": s
            });
        },
        "selfForm.birthday": function(e) {
            try {
                if (e && d(d(e).format("YYYY-MM-DD")).isValid()) {
                    var a = i(e);
                    if (d().diff(d(e).format("YYYY-MM-DD"), "year") > 130 || a && Math.abs(d(a).format("YYYYMMDD").diff(d(e).format("YYYY-MM-DD"), "year") > 1)) {
                        var t = this.data.selfFormRules || [];
                        t.birthday.push({
                            type: "checkBirthday",
                            message: "请输入正确的出生日期"
                        }), this.setData({
                            selfFormRules: t
                        });
                    }
                }
            } catch (e) {}
        },
        "selfForm.residentCondition": function(e) {
            var a = [];
            1 !== parseInt(e) && (a = [ {
                type: "required",
                message: "请选择近一个月旅居史"
            } ]), this.setData({
                "selfFormRules.travelRegionClass": a
            });
        },
        "selfForm.healthState": function(e) {
            var a = [];
            a = [ {
                type: "required",
                message: "请选择症状"
            } ], this.setData({
                "selfFormRules.symptoms": a
            });
        }
    }, e(s, "selfForm.residentCondition", function(e) {
        var a = [];
        1 !== parseInt(e) && (a = [ {
            type: "required",
            message: "请选择近一个月旅居史"
        } ]), 4 !== parseInt(e) && this.setData({
            "selfForm.recentRegionName": "",
            "selfForm.quasiReturnDate": ""
        }), 3 !== parseInt(e) && this.setData({
            "selfForm.returnDate": ""
        }), this.setData({
            "selfFormRules.travelRegionClass": a
        });
    }), e(s, "selfForm.socialContact", function(e) {
        console.log("selfForm.socialContact", e);
    }), s),
    computed: {
        showContactDateRecent: function() {
            return this.data.selfForm.socialContact.length > 0 && this.data.selfForm.socialContact.indexOf("1") > -1;
        },
        showContactDateLike: function() {
            return this.data.selfForm.socialContact.length > 0 && this.data.selfForm.socialContact.indexOf("2") > -1;
        }
    },
    onLoad: function(e) {
        var t = this;
        if (this.setData({
            currentType: e.type
        }), 1 == e.type || 2 == e.type) {
            var n = [ "健康自查上报", "上报我的健康信息", "为他人上报健康状况" ];
            console.log("title[options.type]", n[e.type]), wx.setNavigationBarTitle({
                title: n[e.type]
            }), this.setData({
                "selfForm.clueType": 2 == e.type ? 2 : 0
            });
        }
        e.target && this.setData({
            activeTab: e.target
        }), e.isFromBuy && (this.isFromBuy = parseInt(e.isFromBuy)), this.getRegionData(), 
        this.setData({
            headers: a()
        });
        var i = null;
        i = "1" == e.type ? "fromDataKey" : "fromOtherKey", this.getStorage(i).then(function(a) {
            "1" == e.type ? t.setData({
                regionData: a.regionData,
                disableDetail: a.disableDetail,
                "selfForm.gender": a.formData.gender,
                "selfForm.username": a.formData.username,
                "selfForm.isChinese": a.formData.isChinese,
                "selfForm.domicilePlace": a.formData.domicilePlace,
                "selfForm.nativePlace": a.formData.nativePlace,
                "selfForm.phone": a.formData.phone,
                "selfForm.identityType": a.formData.identityType,
                "selfForm.identity": a.formData.identity,
                "selfForm.birthday": a.formData.birthday,
                "selfForm.street": a.formData.street,
                "selfForm.addr": a.formData.addr,
                "selfForm.residentFlag": a.formData.residentFlag,
                "selfForm.residentCondition": a.formData.residentCondition,
                "selfForm.returnDate": a.formData.returnDate,
                "selfForm.recentRegionName": a.formData.recentRegionName,
                "selfForm.quasiReturnDate": a.formData.quasiReturnDate,
                "selfForm.travelRegionClass": a.formData.travelRegionClass,
                "selfForm.socialContact1": a.formData.socialContact1,
                "selfForm.contactDateRecent": a.formData.contactDateRecent,
                "selfForm.socialContact2": a.formData.socialContact2,
                "selfForm.contactDateLike": a.formData.contactDateLike,
                "selfForm.healthState": a.formData.healthState,
                "selfForm.symptoms": a.formData.symptoms,
                "selfForm.symptomDscr": a.formData.symptomDscr
            }) : t.setData({
                regionData: a.regionData,
                "selfForm.street": a.formData.street,
                "selfForm.addr": a.formData.addr
            });
        }).catch(function(e) {
            console.log("user data error", e);
        });
    },
    setStorage: function(e, a) {
        return new Promise(function(t, n) {
            wx.setStorage({
                key: e,
                data: a,
                success: function(e) {
                    t(e);
                },
                fail: function(e) {
                    n(e);
                }
            });
        });
    },
    getStorage: function(e) {
        return new Promise(function(a, t) {
            wx.getStorage({
                key: e,
                success: function(e) {
                    a(e.data);
                },
                fail: function(e) {
                    t(e);
                }
            });
        });
    },
    onShareAppMessage: function() {},
    handleIdentityChange: function(e) {
        if (t(e.detail.value)) {
            var a = o(e.detail.value), n = i(e.detail.value);
            n && d(d(n).format("YYYYMMDD")).isValid() && d().diff(d(n).format("YYYYMMDD"), "year") <= 130 && this.setData({
                "selfForm.birthday": d(n).format("YYYY-MM-DD")
            }), this.setData({
                "selfForm.gender": a,
                "selfForm.identity": e.detail.value
            });
        } else this.setData({
            "selfForm.identity": e.detail.value
        });
    },
    handleTabChange: function(e) {
        this.setData({
            activeTab: e.detail.value.key
        });
    },
    handleFormChange: function(a) {
        var t = a.target, n = t.dataset, i = t.id;
        this.setData(e({}, n.form + "." + i, a.detail.value));
    },
    handleNationChange: function(e) {
        this.setData({
            "selfForm.isChinese": e.detail.value ? 1 : 0
        });
    },
    handleSocialContact1Change: function(e) {
        this.setData({
            "selfForm.socialContact1": e.detail.value ? "1" : ""
        });
    },
    handleSocialContact2Change: function(e) {
        this.setData({
            "selfForm.socialContact2": e.detail.value ? "2" : ""
        });
    },
    handleGetLocation: function(a) {
        var t = this;
        f().then(function(n) {
            var i;
            console.log(n);
            var o = a.target, s = o.dataset, r = o.id;
            t.setData((i = {}, e(i, s.form + "." + r, n.address), e(i, s.form + ".lng", n.longitude), 
            e(i, s.form + ".lat", n.latitude), i), c);
        });
    },
    handleHBPickerChange: function(e) {
        this.setData({
            "selfForm.hubeiLivingCity": e.detail.value[1].name,
            "selfForm.hubeiLivingCityCode": e.detail.value[1].code
        });
    },
    handleNativePlaceChange: function(e) {
        this.setData({
            "selfForm.nativePlace": e.detail.value[0].name
        });
    },
    handleHBPickerOpen: function() {
        this.setData({
            showHBCityPicker: !0
        });
    },
    handleHBPickerClose: function() {
        this.setData({
            showHBCityPicker: !1
        });
    },
    handleNativePlaceClose: function() {
        this.setData({
            showNativePlacePicker: !1
        });
    },
    handleNativePlaceOpen: function(e) {
        this.setData({
            showNativePlacePicker: !0
        });
    },
    getRegionData: function() {
        var e = this, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        wx.showLoading(), v.getRegionData(a.regionCode, a.regionList).then(function(a) {
            var n = e.data.regionRange.slice(0, t);
            n[t] = {
                title: 0 === t ? "区" : 1 === t ? "街道" : "社区",
                data: a.map(function(e) {
                    return {
                        name: e.regionName,
                        value: {
                            regionName: e.regionName,
                            regionCode: e.regionCode
                        },
                        regionList: e.regionList
                    };
                })
            }, e.setData({
                regionRange: n
            }, function() {
                return wx.hideLoading();
            });
        }).catch(function(e) {
            return wx.hideLoading();
        });
    },
    handleOpenRegion: function(e) {
        this.regionPickerForm = e.target.dataset.form, this.setData({
            showRegionPicker: !0,
            regionRange: this.data.regionRange.slice(0, 1)
        });
    },
    handleRegionChange: function(a) {
        var t = a.detail.value;
        if (3 === t.length) {
            var n;
            this.setData((n = {}, e(n, this.regionPickerForm + ".regionData", t), e(n, this.regionPickerForm + ".street", t.map(function(e) {
                return e.regionName;
            }).join("")), n));
        }
    },
    handleRegionColumnChange: function(e) {
        var a = e.detail, t = a.item, n = a.index;
        2 === n ? this.handleRegionClose() : this.getRegionData(t, n + 1);
    },
    handleRegionClose: function() {
        this.setData({
            showRegionPicker: !1
        });
    },
    handleAgreeChange: function() {
        this.setData({
            agree: !this.data.agree
        });
    },
    handleisCreateCard: function() {
        this.setData({
            isCreateCard: !this.data.isCreateCard
        });
    },
    getPhoneNumber: function(e) {
        var a = this, t = e.detail, n = t.iv, i = t.encryptedData;
        if (console.log(1, n, i), n && i) return wx.showLoading({
            title: "努力加载中..."
        }), g({
            url: "/wll/account/getphone",
            method: "POST",
            data: {
                encryptedData: i,
                iv: n
            }
        }).then(function(e) {
            wx.hideLoading(), console.log("res", e), e && e.phone && a.setData({
                "selfForm.phone": e.phone
            });
        }).catch(function(e) {
            wx.hideLoading(), console.error(e);
        });
        console.error("用户拒绝授权登录");
    },
    handleSelfSubmit: function(e) {
        var a = this;
        if (e.detail.validStatus) {
            var t = r({}, e.detail.value);
            t.systemInfo = h;
            var i = t.regionData;
            0 != i.length && void 0 != i || (i = this.data.regionData);
            var o = {};
            o.formData = t, o.disableDetail = this.data.disableDetail, o.regionData = i, "1" == this.data.currentType ? this.setStorage("fromDataKey", o).catch(function(e) {
                console.error(e);
            }) : "2" == this.data.currentType && this.setStorage("fromOtherKey", o).catch(function(e) {
                console.error(e);
            }), t.recentInHubei = t.recentInHubei ? 1 : 0;
            try {
                0 != i.length && (t.areaCode = i[0].regionCode, t.street = i[1].regionName, t.streetCode = i[1].regionCode, 
                t.community = i[2].regionName, t.communityCode = i[2].regionCode, t.area = i[0].regionName);
            } catch (e) {
                console.log(e);
            }
            t.city = u.cityName, t.cityCode = u.cityCode, t.birthday = n(t.birthday), t.returnDate = n(t.returnDate), 
            t.contactDateRecent = n(t.contactDateRecent), t.quasiReturnDate = n(t.quasiReturnDate), 
            t.contactDateLike = n(t.contactDateLike), t.socialContact1 || (t.contactDateRecent = ""), 
            t.socialContact2 || (t.contactDateLike = ""), (t.socialContact1 || t.socialContact2) && (t.socialContact = t.socialContact1 || "", 
            t.socialContact2 && (t.socialContact = t.socialContact + (t.socialContact ? "," : "") + t.socialContact2), 
            delete t.socialContact1, delete t.socialContact2), t.symptoms = t.symptoms.map(function(e) {
                return parseInt(e);
            }), t.residentFlag && (t.residentFlag = parseInt(t.residentFlag)), t.residentCondition && (t.residentCondition = parseInt(t.residentCondition)), 
            t.travelRegionClass && (t.travelRegionClass = parseInt(t.travelRegionClass)), t.healthState && (t.healthState = parseInt(t.healthState)), 
            delete t.regionData, wx.showLoading(), D.nCovSave(t).then(function(e) {
                0 == t.clueType && wx.setStorageSync("selfForm__submit", !0), wx.hideLoading(), 
                a.isFromBuy ? wx.navigateTo({
                    url: "../msg/index?isFromBuy=" + a.isFromBuy
                }) : wx.navigateTo({
                    url: "../msg/index?info=" + JSON.stringify(t)
                });
            }).catch(function() {
                wx.hideLoading(), wx.showToast({
                    title: "服务器拥挤，请稍后再试",
                    icon: "none"
                });
            });
        }
    },
    get_uuid: function() {
        for (var e = [], a = 0; a < 36; a++) e[a] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
        return e[14] = "4", e[19] = "0123456789abcdef".substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", 
        e.join("");
    },
    isCreateFlagFn: function() {
        var e = this, a = this;
        y.getRelationStateByUser({
            uid: a.data.userInfo.uid,
            verCodes: wx.getStorageSync("verCodes")
        }).then(function(a) {
            0 == a.length ? e.setData({
                isCreateFlag: !0
            }) : e.setData({
                isCreateFlag: !1
            });
        }).catch(function(a) {
            console.log("查看失败信息", a), e.setData({
                isCreateFlag: !1
            });
        });
    }
});