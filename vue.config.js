const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true, //自动打开浏览器
    host: "localhost",
  },
  lintOnSave: true, //关闭检查
})
