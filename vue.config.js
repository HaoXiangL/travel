const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('style', resolve('src/assets/style'))
      // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
      // 生成该文件后需要重启ide
  },
  devServer: {
    proxy: {
      '/api': {
        // 目标路径
        target: 'http://localhost:8080',
        // 重写路径为
        pathRewrite: {
          '^/api': '/mock'
        }
        // ws: true,
        // changeOrigin: true
      }
    }
  }
}
