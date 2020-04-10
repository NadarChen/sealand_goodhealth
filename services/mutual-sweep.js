var t = getApp(), e = t.request;

t.config, t.wxp;

exports.relationUserList = function(t) {
    return e({
        url: "/prominent-citizens/qrcCodeRelation/v1/relationUserList",
        method: "GET",
        data: t
    });
};