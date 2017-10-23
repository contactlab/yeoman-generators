/*eslint-env node*/

const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Then}) => {

  Then(/^the title is "([^"]*)"$/, title =>
    client
      .pause(1000)
      .assert.title(title)
  );

  Then(/^the url contains "([^"]*)"$/, url =>
    client
      .pause(1000)
      .assert.urlContains(url)
  );

  Then(/^the title h1 of the page with selector "([^"]*)" is "([^"]*)"$/, (selector, h1) =>
    client
      .waitForElementVisible(selector, client.globals.timeout)
      .assert.containsText(selector, h1)
  );

});
