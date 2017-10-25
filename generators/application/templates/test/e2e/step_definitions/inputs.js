/*eslint-env node*/

const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
const {eScrollTo} = require('../_helpers');

defineSupportCode(({Then, When}) => {

  Then(/^the input value of "([^"]*)" is equal to "([^"]*)"$/, (entity, selector, msg) =>
    client
      .pause(1000)
      .execute(eScrollTo(selector))
      .pause(2000)
      .getValue(selector, res => {
        client.assert.equal(res.value, msg);
      })
  );

  Then(/^the input value of "([^"]*)" contains "([^"]*)"$/, (entity, selector, msg) =>
    client
      .pause(1000)
      .execute(eScrollTo(selector))
      .pause(2000)
      .assert.attributeContains(selector, 'value', msg)
  );

  Then(/^I click on option with text "([^"]*)" and the ul selector is "([^"]*)"$/, (text, selectorUl) =>
    client
      .elements('css selector', `${selectorUl} li`, els => {
        els.value.forEach(singleEl => {
          client.elementIdText(singleEl.ELEMENT, el => {
            if (el.value.toLowerCase().indexOf(text.toLowerCase()) > -1) {
              return client.elementIdClick(singleEl.ELEMENT);
            }
          });
        });
      })
  );

  // Fill a given element of the page
  When(/^I fill the "([^"]*)" with selector "([^"]*)" with string "([^"]*)"$/, (entity, selector, str) =>
    client
      .waitForElementVisible(selector, client.globals.timeout)
      .clearValue(selector)
      .setValue(selector, str)
  );

  Then(/^I change the focus$/, () =>
    client.click('body')
  );

  When(/^I send enter to the selector "([^"]*)"$/, selector =>
    client.setValue(selector, client.Keys.ENTER)
  );

  Then(/^the checkbox with selector "([^"]*)" is checked$/, selector =>
    client
      .element('css selector', selector, res => {
        client.elementIdSelected(res.value.ELEMENT, res2 => client.verify.ok(res2.value, 'Checkbox is selected'));
      })
  );

  Then(/^the button with selector "([^"]*)" is disabled$/, selector =>
    client
      .getAttribute(selector, 'disabled', res => {
        if (res.status === 0) {
          client.assert.equal(res.value, 'true');
          return;
        }

        throw new Error(JSON.stringify(res.value));
      })
  );

  Then(/^the button with selector "([^"]*)" is enabled$/, selector =>
    client
      .getAttribute(selector, 'disabled', res => {
        if (res.status === 0) {
          client.assert.equal(res.value, null);
          return;
        }

        throw new Error(JSON.stringify(res.value));
      })
  );

  Then(/^I choose an option with text "([^"]*)" from the dropdown with selector "([^"]*)"$/, (textOption, selectorDropdown) =>
    client
      .pause(2000)
      .waitForElementVisible(selectorDropdown, 13000)
      .click(selectorDropdown)
      .elements('css selector', `${selectorDropdown} #list > li`, resElements => {
        for (const el of resElements.value) {
          client.elementIdText(el.ELEMENT, objText => {
            if (objText.value.toLowerCase() === textOption.toLowerCase()) {
              client.elementIdClick(el.ELEMENT, resClick => {
                client.assert.ok(resClick.state === 'success', `Verify clicking on option: ${textOption}, with selector ${selectorDropdown}`);
              });
            }
          });
        }
      })
  );

  Then(/^I choose an option with text "([^"]*)" from the multi-option with selector "([^"]*)"$/, (textOption, selector) =>
    client
      .pause(2000)
      .elements('css selector', `${selector} li`, resElements => {
        for (const el of resElements.value) {
          client.elementIdText(el.ELEMENT, objText => {
            if (objText.value.toLowerCase() === textOption.toLowerCase()) {
              client.elementIdClick(el.ELEMENT, resClick => {
                client.assert.ok(resClick.state === 'success', `Verify clicking on option: ${textOption}, with selector ${selector}`);
              });
            }
          });
        }
      })
  );

  Then(/^the dropdown with selector "([^"]*)" does not contain an option with text "([^"]*)" and options with selector "([^"]*)"$/, (selector, text, selectorOption) => {
    let contains = false;

    client
      .click(selector)
      .elements('css selector', selectorOption, res => {
        res.value.forEach(el => {
          client.elementIdText(el.ELEMENT, res => {
            contains = res.value.search('COMBINED') > -1;
          });
        });

        client.assert.equal(contains, false, 'COMBINED segments not present');
      });
  });

  Then(/^I select from "([^"]*)" with selector "([^"]*)" the option with name "([^"]*)"$/, (elDetail, selector, optionName) =>
    client
      .pause(2000)
      // Click on the conditions dropdown
      .click(selector)
      // Get all elements inside
      .elements('css selector', `${selector} #list > li`, res => {
        let clicked = false;
        res.value.forEach((el, i) => {
          client.elementIdText(el.ELEMENT, objText => {
            if (objText.value.toLowerCase() === optionName.toLowerCase()) {
              client.elementIdClick(el.ELEMENT);
              clicked = true;
            }

            if (clicked === false && res.value.length - 1 === i) {
              throw new Error(`Element "${optionName}" not found in "${elDetail}" (selector: ${selector})`);
            }
          });
        });
      })
      .pause(1000)
  );

});
