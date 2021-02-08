// https://gridsome.org/docs/config

// Help&web global styles
const path = require('path')
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/help/scss/globals.scss')
      ]
    })
}

module.exports = {
  siteName: 'Rastro',
  siteUrl: 'https://somosrastro.com',
  plugins: [],
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}

