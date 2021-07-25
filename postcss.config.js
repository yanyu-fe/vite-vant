module.exports = {
    plugins:{
        "postcss-pxtorem":{
            rootValue:37.5,
            // 设置根字体大小为
            propList:["*"],
            // 过滤掉.norem-开头的class不进行转换
            selectorBlackList: ['.norem']
        }
    }
}
