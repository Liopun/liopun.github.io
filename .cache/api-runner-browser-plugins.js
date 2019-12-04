module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["Roboto:300,400","Roboto Mono"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Captone Habiyaremye","short_name":"hcaptone","start_url":"/","background_color":"#252731","theme_color":"#252731","display":"minimal-ui","icon":"./src/assets/favicon.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
