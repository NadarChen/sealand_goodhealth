function e() {
    return t.request({
        url: "" + r.cdnDomain + r[r.env].regionPath + "?t=" + Date.now()
    }).then(function(e) {
        var n = e.data[0].regionList[0].regionList;
        return getApp().currentRegionSource = n, n;
    });
}

var n = getApp(), r = (n.request, n.config), t = n.wxp;

exports.getRegionData = function(n, r) {
    r = r || getApp().currentRegionSource;
    var t = Promise.resolve(r);
    return r || (t = e()), t.then(function(e) {
        var r = e.find(function(e) {
            return e.regionCode === n;
        });
        return r && r.regionList || [];
    }), t;
};