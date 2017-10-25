/*eslint-env node*/

const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When}) => {

  Given(/^I open the homepage$/, () =>
    client
      .url(client.launchUrl)
      .waitForElementVisible('body', client.globals.timeout)
  );

  When(/^I open the url "([^"]*)"$/, url =>
    client
      .url(client.launchUrl + url)
      .waitForElementVisible('body', client.globals.timeout)
  );

  When(/^I make the login with username "([^"]*)" and password "([^"]*)"$/, (user, pwd) =>
    client
      .setValue('#view-username', user)
      .setValue('#view-password', pwd)
      .pause(500)
      .click('input[type=submit]')
      .pause(1000)
  );

  When(/^I click on a link with text "([^"]*)"$/, linkText =>
    client
      .pause(2000)
      .click('link text', linkText, res => {
        if (res.status === 0) {
          return client;
        }

        return client
          .pause(3000)
          .click('link text', linkText);
      })
  );

});
