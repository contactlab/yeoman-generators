/*eslint-env node */
/*eslint-disable camelcase*/

const BINPATH = './.bin';
const E2EPATH = './test/e2e';

const e2e = f => `${E2EPATH}/${f}`;
const bin = f => `${BINPATH}/${f}`;

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', e2e('step_definitions'),
    e2e('features')
  ]
});

const waitForNotVisible = (browser, selector) => {
  browser.pause(3000);
  browser.isVisible(selector, res => res.value ? null : browser.refresh().pause(2000));
};

module.exports = {
  output_folder: e2e('reports'),

  // --- Selenium
  selenium: {
    start_process: true,
    server_path  : bin('selenium.jar'),
    cli_args     : {'webdriver.chrome.driver': bin('chromedriver')}
  },

  // --- Test environments
  test_settings: {
    default: {
      launch_url   : 'http://localhost:8180',

      screenshots  : {
        enabled: true,
        path   : e2e('screenshots')
      },

      globals: {
        timeout: 30000,
        waitForNotVisible
      },

      desiredCapabilities: {
        browserName      : 'chrome',
        chromeOptions    : {args: ['--window-size=1900,1200']},
        javascriptEnabled: true,
        acceptSslCerts   : true
      }
    }
  }
};
