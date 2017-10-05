/*eslint-env node*/

const stylelint              = require('stylelint');
const cssnext                = require('postcss-cssnext');
const cssnano                = require('cssnano');
const reporter               = require('postcss-reporter');
const lost                   = require('lost');
const postcssEasingGradients = require('postcss-easing-gradients');

module.exports = {
  plugins: [
    stylelint({
      configFile: './.stylelintrc'
    }),
    cssnext({
      browsers: [
        'last 2 version'
      ],
      features: {
        customProperties: false
      }
    }),
    lost({
      flexbox: 'flex',
      gutter: '8px'
    }),
    postcssEasingGradients(),
    cssnano({
      autoprefixer: false,
      minifySelectors: false,
      reduceIdents: false,
      zindex: false,
      discardUnused: {
        keyframes: false
      }
    }),
    reporter({
      filter: () => true,
      clearAllMessages: true,
      clearReportedMessages: true
    })
  ]
};
