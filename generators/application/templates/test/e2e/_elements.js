/*eslint-env node*/

const { client } = require('nightwatch-cucumber');
const { eScrollTo } = require('./_helpers');

module.exports = {
  theElementWithSelector$IsVisible: selector =>
    client
      .pause(2000)
      .waitForElementVisible(selector, client.globals.timeout)
      .isVisible(selector),

  theElementWithSelector$HasClass$: (selector, elClass) =>
    client
      .pause(1000)
      .assert.cssClassPresent(selector, elClass),

  theElementWithSelector$HasNotClass$: (selector, elClass) =>
    client
      .pause(1000)
      .assert.cssClassNotPresent(selector, elClass),

  theElementWithSelector$IsNotPresent: selector =>
    client
      .waitForElementNotPresent(selector, client.globals.timeout),

  theElementWithSelector$IsNotVisible: selector =>
    client
      .waitForElementNotVisible(selector, client.globals.timeout),

  atLeast$ElementsWithSelector$ArePresent: (amount, selector) =>
    client
      .pause(1000)
      .waitForElementVisible(selector, client.globals.timeout)
      .elements('css selector', selector, res => {
        client.assert.ok(res.value.length >= amount);
      }),

  theElementWithSelector$ContainsText$: (selector, msg) =>
    client
      .waitForElementVisible(selector, client.globals.timeout)
      .assert.containsText(selector, msg),

  theElementWithSelector$NotContainsText$: (selector, msg) =>
    client
      .waitForElementVisible(selector, client.globals.timeout)
      .getText(selector, res => client.assert.ok(res.value.includes(msg) === false)),

  theElementWithSelector$ContainsInsideTheAttribute$TheText$: (selector, attribute, msg) =>
    client
      .waitForElementVisible(selector, client.globals.timeout)
      .assert.attributeContains(selector, attribute, msg),

  theElementWithSelector$HasTheAttribute$: (selector, attribute) =>
    client
      .waitForElementVisible(selector, client.globals.timeout)
      .getAttribute(selector, attribute, result => {
        client.assert.equal(result.value, '');
      }),

  theElementWithSelector$HasNotTheAttribute$: (selector, attribute) =>
    client
      .waitForElementVisible(selector, client.globals.timeout)
      .getAttribute(selector, attribute, result => {
        client.assert.equal(result.value, null);
      }),

  iWaitForTheSelector$ToBeNotVisible: selector =>
    client
      .globals.waitForNotVisible(client, selector),

  iWaitForTheSelector$ToBeVisible: selector =>
    client
      .waitForElementVisible(selector, client.globals.waitForConditionTimeout),

  iClickOnElementWithTheSelector$: selector =>
    client
      .execute(eScrollTo(selector))
      .waitForElementVisible(selector, client.globals.timeout)
      .click('css selector', selector),

  iClickOnElementWithTheXPath$: xpath =>
    client
      .pause(1000)
      // .waitForElementVisible(selector)
      .click('xpath', xpath),

  iClickWithThe$ButtonOfTheMouse: type =>
    client
      .mouseButtonClick(type),

  iClickAsBrowserToSelector$: selector =>
    client
      .pause(1000)
      .execute(selector => document.querySelector(selector).click(), [selector]),
};
