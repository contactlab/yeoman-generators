/*eslint-env node*/

const { defineSupportCode } = require('cucumber');
const {
  theElementWithSelector$IsVisible,
  theElementWithSelector$HasClass$,
  theElementWithSelector$HasNotClass$,
  theElementWithSelector$IsNotPresent,
  theElementWithSelector$IsNotVisible,
  atLeast$ElementsWithSelector$ArePresent,
  theElementWithSelector$ContainsText$,
  theElementWithSelector$NotContainsText$,
  theElementWithSelector$ContainsInsideTheAttribute$TheText$,
  theElementWithSelector$HasTheAttribute$,
  theElementWithSelector$HasNotTheAttribute$,
  iWaitForTheSelector$ToBeNotVisible,
  iWaitForTheSelector$ToBeVisible,
  iClickOnElementWithTheSelector$,
  iClickOnElementWithTheXPath$,
  iClickWithThe$ButtonOfTheMouse,
  iClickAsBrowserToSelector$
} = require('../_elements.js');

defineSupportCode(({ Then, When }) => {

  Then(/^the element with selector "([^"]*)" is visible$/, selector =>
    theElementWithSelector$IsVisible(selector)
  );

  Then(/^the element with selector "([^"]*)" has class "([^"]*)"$/, (selector, elClass) =>
    theElementWithSelector$HasClass$(selector, elClass)
  );

  Then(/^the element with selector "([^"]*)" has NOT class "([^"]*)"$/, (selector, elClass) =>
    theElementWithSelector$HasNotClass$(selector, elClass)
  );

  Then(/^the element with selector "([^"]*)" is NOT present$/, selector =>
    theElementWithSelector$IsNotPresent(selector)
  );

  Then(/^the element with selector "([^"]*)" is NOT visible$/, selector =>
    theElementWithSelector$IsNotVisible(selector)
  );

  Then(/^at least ([^"]*) elements with selector "([^"]*)" are present$/, (amount, selector) =>
    atLeast$ElementsWithSelector$ArePresent(amount, selector)
  );

  Then(/^the element with selector "([^"]*)" contains text "([^"]*)"$/, (selector, msg) =>
    theElementWithSelector$ContainsText$(selector, msg)
  );

  Then(/^the element with selector "([^"]*)" NOT contains text "([^"]*)"$/, (selector, msg) =>
    theElementWithSelector$NotContainsText$(selector, msg)
  );

  Then(/^the element with selector "([^"]*)" contains inside the attribute "([^"]*)" the text "([^"]*)"$/, (selector, attribute, msg) =>
    theElementWithSelector$ContainsInsideTheAttribute$TheText$(selector, attribute, msg)
  );

  Then(/^the element with selector "([^"]*)" has the attribute "([^"]*)"$/, (selector, attribute) =>
    theElementWithSelector$HasTheAttribute$(selector, attribute)
  );

  Then(/^the element with selector "([^"]*)" has NOT the attribute "([^"]*)"$/, (selector, attribute) =>
    theElementWithSelector$HasNotTheAttribute$(selector, attribute)
  );

  Then(/^I wait for the selector "([^"]*)" to be NOT visible$/, selector =>
    iWaitForTheSelector$ToBeNotVisible(selector)
  );

  Then(/^I wait for the selector "([^"]*)" to be visible$/, selector =>
    iWaitForTheSelector$ToBeVisible(selector)
  );

  When(/^I click on element with the selector "([^"]*)"$/, selector =>
    iClickOnElementWithTheSelector$(selector)
  );

  When(/^I click on element with the XPATH "([^"]*)"$/, xpath =>
    iClickOnElementWithTheXPath$(xpath)
  );

  Then(/^I click with the "([^"]*)" button of the mouse$/, type =>
    iClickWithThe$ButtonOfTheMouse(type)
  );

  Then(/^I click as browser to selector "([^"]*)"$/, selector =>
    iClickAsBrowserToSelector$(selector)
  );

});
