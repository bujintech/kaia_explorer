module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 16, // 设计稿的根字体大小
      propList: ["*"], // 可以转化的属性，'*'表示所有属性
      unitPrecision: 5, // 转换后保留的小数位数
    },
  },
};
