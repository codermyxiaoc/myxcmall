const path = require('path')
function resolve(dir) {
  return path.join(__dirname,dir)
}
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias
    .set('assets',resolve('./src/assets'))
    .set('network', resolve('./src/network'))
    .set('components', resolve('./src/components'))
    .set('views', resolve('./src/views'))
    .set('common',resolve('./src/common'))
  }
})
