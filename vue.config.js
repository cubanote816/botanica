const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const fs = require('fs')

module.exports = {
    devServer: {
        compress: true,
        host: 'localhost',
        https: {
            key: fs.readFileSync('./cert/server.key'),
            cert: fs.readFileSync('./cert/sever.cert'),
            ca: fs.readFileSync('./cert/ca.pem'),
        },
        open: true,
        overlay: true,
        port: 8080
    },

    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production' || process.env.VUE_APP_APICLIENT == 'server') {
            // mutate config for production...
            config.resolve.alias.set('api-client', path.resolve(__dirname, 'src/api/server/index.js'))
        } else {
            // mutate for development...
            config.resolve.alias.set('api-client', path.resolve(__dirname, 'src/api/mock/index.js'))
        }
    },

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'es',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
}
