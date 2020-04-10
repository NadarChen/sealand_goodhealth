function e(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var a = getApp(), t = a.Anim, s = a.request;

t.Page({
    data: {
        otherObj: {},
        formData: {
            listItems: [ {
                name: "",
                number: ""
            } ],
            company: "",
            user_name: "",
            phone: "",
            desc: ""
        },
        materialRange: [ {
            name: "医用快速消毒液",
            value: "医用快速消毒液",
            displayName: "医用快速消毒液"
        }, {
            name: "医用外科口罩",
            value: "医用外科口罩",
            displayName: "医用外科口罩"
        }, {
            name: "医用一次性工作帽",
            value: "医用一次性工作帽",
            displayName: "医用一次性工作帽"
        }, {
            name: "医用防护面屏",
            value: "医用防护面屏",
            displayName: "医用防护面屏"
        }, {
            name: "医用一次性鞋套",
            value: "医用一次性鞋套",
            displayName: "医用一次性鞋套"
        }, {
            name: "其他",
            value: "其他",
            displayName: "其他"
        } ],
        addIconSrc: "https://imgcache.gzonline.gov.cn/cos/add_d7e4b605.svg",
        isNeedDesc: !1,
        validateType: {
            checkLimit: function(e, a) {
                return console.log(e), e + "" <= "9223372036854775807";
            }
        }
    },
    computed: {
        rules: function() {
            var e = this.data, a = e.formData, t = {
                user_name: [ {
                    type: "required",
                    message: "请输入联系人"
                } ],
                company: [ {
                    type: "required",
                    message: "请输入捐赠单位"
                } ],
                phone: [ {
                    type: "required",
                    message: "请输入联系电话"
                }, {
                    type: "mobile",
                    message: "手机号格式不正确"
                } ]
            };
            return e.isNeedDesc && (t.desc = [ {
                type: "required",
                message: "请输入捐赠说明"
            } ]), a.listItems.forEach(function(e, a) {
                t["listItems." + a + ".name"] = [ {
                    type: "required",
                    message: "请选择捐赠物品"
                } ], t["listItems." + a + ".number"] = [ {
                    type: "required",
                    message: "请输入捐赠数量"
                }, {
                    type: "checkLimit",
                    message: "捐赠数量不得超过 9223372036854775807"
                } ];
            }), t;
        }
    },
    handleSubmit: function(e) {
        e.detail.validStatus && (wx.showLoading(), s({
            url: "/donation/add",
            data: this.data.formData,
            method: "POST"
        }).then(function() {
            wx.hideLoading(), wx.redirectTo({
                url: "/pages/donate/msg/index?tag=1"
            });
        }).catch(function(e) {
            wx.hideLoading(), wx.redirectTo({
                url: "/pages/donate/msg/index?tag=2"
            });
        }));
    },
    addMaterial: function() {
        var e = this.data.formData;
        this.setData({
            formData: Object.assign({}, e, {
                listItems: e.listItems.concat({
                    name: "",
                    number: ""
                })
            })
        });
    },
    removeMaterial: function(e) {
        var a = e.currentTarget.dataset.index, t = this.data, s = t.formData, i = t.otherObj;
        if (1 !== s.listItems.length) {
            var n = "listItems[" + a + "].name";
            i.hasOwnProperty(n) && delete i[n], this.setData({
                otherObj: Object.assign({}, i),
                isNeedDesc: !!Object.keys(i).length
            }), s.listItems.splice(a, 1), this.setData({
                formData: Object.assign({}, s)
            });
        } else wx.showToast({
            title: "请至少输入一项物资",
            icon: "none"
        });
    },
    handleFormChange: function(a) {
        var t = a.detail.value, s = a.currentTarget.id;
        if (-1 !== s.indexOf("listItems") && -1 !== s.indexOf("name")) {
            var i = this.data.otherObj;
            "其他" === t ? (i[s] = 1, this.setData({
                isNeedDesc: !0,
                otherObj: Object.assign({}, i)
            })) : (i.hasOwnProperty(s) && delete i[s], this.setData({
                otherObj: Object.assign({}, i),
                isNeedDesc: !!Object.keys(i).length
            }));
        }
        this.setData(e({}, "formData." + a.target.id, t));
    }
});