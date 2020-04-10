function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var n = function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var o = n[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(n, t, o) {
        return t && e(n.prototype, t), o && e(n, o), n;
    };
}();

module.exports = function(t) {
    console.log("app", t);
    var o = t.Anim, i = (t.request, t.config), r = t.wxp, l = t.storage;
    return (0, o.wedux.observe)(new (function() {
        function o() {
            e(this, o), this.initConfigInfo();
        }
        return n(o, [ {
            key: "initConfigInfo",
            value: function() {
                this.wllConfig = {};
            }
        }, {
            key: "requestConfig",
            value: function() {
                var e = this;
                return r.request({
                    url: i.cdnDomain + i[i.env].wllConfigPath + "?t=" + Date.now(),
                    method: "GET"
                }).then(function(n) {
                    return e.wllConfig = n.data, t.buyType = e.wllConfig.buy_type, l.setStorageSync("__wll_config__", e.wllConfig, i.wllConfigCacheTime), 
                    e.wllConfig;
                });
            }
        }, {
            key: "fetchWllConfig",
            value: function() {
                var e = l.getStorageSync("__wll_config__"), n = Promise.resolve(e);
                return e ? (this.wllConfig = e, t.buyType = e.buy_type) : n = this.requestConfig(), 
                n;
            }
        }, {
            key: "weGetDecodeURIComponent",
            value: function(e) {
                decodeURIComponent(e.scene);
                wx.request({
                    url: "",
                    data: {},
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(e) {
                        console.log(e.data);
                    }
                });
            }
        } ]), o;
    }())(), "config");
};