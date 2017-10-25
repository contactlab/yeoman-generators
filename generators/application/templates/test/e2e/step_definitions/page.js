/*eslint-env node*/

const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
const {eScrollTo} = require('../_helpers');

defineSupportCode(({Then, When}) => {

  Then(/^I move to selector "([^"]*)"$/, selector =>
    client.moveTo(selector)
  );

  When(/^I scroll to top$/, () =>
    client.execute('window.scrollTo(0,0)')
  );

  When(/^I scroll to bottom$/, () =>
    client.execute('window.scrollTo(0,document.body.scrollHeight)')
  );

  When(/^I scroll to selector "([^"]*)"$/, selector =>
    client.execute(selector => document.querySelector(selector).scrollIntoView(), [selector])
  );

  Then(/^I go to the element with selector "([^"]*)"$/, selector =>
    client
      .pause(1000)
      .execute(eScrollTo(selector))
  );

  Then(/^pause$/, () =>
    client.pause(1000)
  );

  Then(/^wait for "([^"]*)"$/, time =>
    client.pause(Number(time))
  );

});
