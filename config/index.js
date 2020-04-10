function e(e, o, t) {
    return o in e ? Object.defineProperty(e, o, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[o] = t, e;
}

var o;

module.exports = (o = {
    regionCode: "441500000000",
    cityCode: "441500",
    wllConfigCacheTime: 600,
    provinceName: "广东省",
    cityName: "汕尾市",
    cityShortName: "汕",
    provinceCode: "30824",
    isCard: !1,
    isMedicareCard: !1,
    isSecurityCard: !1,
    env: "prod",
    domain: "https://swgd.tgovcloud.com",
    appid: "microService-SHANWEI",
    regionUUID: "97088886735507458"
}, e(o, "appid", "microService-SHANWEI"), e(o, "dev", {
    pharmacyPath: "/cloud/wyj/ypgg_data_prd.json",
    buyDomain: "https://skyy-dev.gzonline.gov.cn",
    electronCard: "https://yunapi.healthcard.qq.com",
    wllConfigPath: "/cloud/wyj/wll_mp_dev_config.json",
    regionPath: "/cloud/wyj/quhua.json",
    wenzhenPath: "/cloudsa3/wenzhen/config/entry.json",
    carCodePath: "/traffic-gate-es",
    healthCodePath: "/prominent-citizens",
    realNameSetting: "city"
}), e(o, "prod", {
    pharmacyPath: "/cloud/wyj/ypgg_data_prd.json",
    buyDomain: "https://swgd-yy.tgovcloud.com",
    electronCard: "https://yunapi.healthcard.qq.com",
    wllConfigPath: "/cloud/wyj/wll_mp_pro_config.json",
    regionPath: "/cloud/wyj/quhua.json",
    wenzhenPath: "/cloudsa3/wenzhen/config/entry.json",
    carCodePath: "/traffic-gate-es",
    healthCodePath: "/prominent-citizens",
    realNameSetting: "city"
}), e(o, "test", {
    pharmacyPath: "/cloudsa3/wyj/ypgg_data_prd2020013101.json",
    buyDomain: "https://testyy.tgovcloud.com",
    wllConfigPath: "/cloudsa3/wyj/wll_mp_dev_config.json",
    regionPath: "/cloudsa3/uc/gz202020201.json",
    wenzhenPath: "/cloudsa3/wenzhen/config/entry.json",
    carCodePath: "https://testyy.tgovcloud.com/traffic-gate-es",
    healthCodePath: "/prominent-citizens"
}), e(o, "cdnDomain", "https://wyj-1301196457.file.myqcloud.com"), e(o, "cosDomain", "https://suikang-prod-1251947680.cos.ap-guangzhou.myqcloud.com"), 
e(o, "regionLevel", [ {
    title: "市"
}, {
    title: "区"
} ]), o);