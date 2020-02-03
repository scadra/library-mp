const path = require('path');

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'i18n',
      enableInSFC: false,
    },
  },
};

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('Components', path.resolve(__dirname, './src/components/'))
      .set('Store', path.resolve(__dirname, './src/store/'))
      .set('Router', path.resolve(__dirname, './src/router/'))
      .set('Variable', path.resolve(__dirname, './src/scss/variable.scss'))
      .set('Spacing', path.resolve(__dirname, './src/scss/spacing.scss'))
      .set('Main', path.resolve(__dirname, './src/scss/main.scss'))
      .set('Assets', path.resolve(__dirname, './src/assets/'))
      .set('Constants', path.resolve(__dirname, './src/constants/'))
      .set('Interfaces', path.resolve(__dirname, './src/services/interfaces/'))
      .set('Services', path.resolve(__dirname, './src/services/impl/'))
      .set('Models', path.resolve(__dirname, './src/models/'));
  },
};
