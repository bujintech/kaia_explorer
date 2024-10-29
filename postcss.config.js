module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      unitToConvert: "px", // 要转换的单位
      viewportWidth: 1920, // 设计稿的视口宽度
      unitPrecision: 5, // 转换后保留的小数位数
      viewportUnit: "vw", // 需要转换成的单位
      selectorBlackList: ["ignore", "tab-bar"], // 不进行转换的类
      minPixelValue: 1, // 小于或等于1px不进行转换
      mediaQuery: false, // 是否在媒体查询中转换px
    },
  },
};
