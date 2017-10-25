/*eslint-env node*/

const { defineSupportCode } = require('cucumber');
const {
  iClickOnElementWithTheSelector$,
  theElementWithSelector$ContainsText$,
} = require('../_elements.js');

const userWidgetMainSelector = 'div.UserTool user-widget';

const userWidgetSelector = userWidgetMainSelector.concat(' .UserWidget');
const settingsSelector = userWidgetSelector.concat(' .Menu :first-child');
const exitSelector = userWidgetSelector.concat(' .Menu :nth-child(2)');
const userSettingsSelector = userWidgetMainSelector.concat(' user-settings');
const portfolioOptionList = userSettingsSelector.concat(' > modal-clab div.modal div.modal-body dropdown-clab:nth-child(1)');
const portfolioDropdownSelector = portfolioOptionList.concat(' > div > div > div');
const workspaceOptionList = userSettingsSelector.concat(' > modal-clab div.modal div.modal-body dropdown-clab:nth-child(2)');
const workspaceDropdownSelector = workspaceOptionList.concat(' > div > div > div');
const confirmSettingsButton = userSettingsSelector.concat(' > modal-clab div.modal div.main-actions button-clab > button');
const settingsModalCloseButton = userSettingsSelector.concat(' modal-clab div.close-overlay');

const userInfosSelector = userWidgetMainSelector.concat(' .UserInfos');
const portfolioWorkspaceLabelSelector = userInfosSelector.concat(' div.Portfolio');

defineSupportCode(({ Then, When }) => {

  When(/^I select the portfolio at position "([^"]*)"$/, position => {
    // click userWidget icon
    iClickOnElementWithTheSelector$(userWidgetSelector);

    // click option "settings"
    iClickOnElementWithTheSelector$(settingsSelector);

    // click portfolio dropdown
    iClickOnElementWithTheSelector$(portfolioDropdownSelector);

    // click option at specified position
    const nthOptionSelector = portfolioOptionList.concat(` #list :nth-child(${position})`);
    iClickOnElementWithTheSelector$(nthOptionSelector);
  });

  When(/^I select the workspace at position "([^"]*)"$/, position => {
    // click userWidget icon
    iClickOnElementWithTheSelector$(userWidgetSelector);

    // click option "settings"
    iClickOnElementWithTheSelector$(settingsSelector);

    // click workspace dropdown
    iClickOnElementWithTheSelector$(workspaceDropdownSelector);

    // click option at specified position
    const nthOptionSelector = workspaceOptionList.concat(` #list :nth-child(${position})`);
    iClickOnElementWithTheSelector$(nthOptionSelector);
  });

  When(/^I select the portfolio at position "([^"]*)" and the workspace at position "([^"]*)"$/, (portfolioPos, workspacePos) => {
    // click userWidget icon
    iClickOnElementWithTheSelector$(userWidgetSelector);

    // click option "settings"
    iClickOnElementWithTheSelector$(settingsSelector);

    // click portfolio dropdown
    iClickOnElementWithTheSelector$(portfolioDropdownSelector);

    // click option at specified position
    const nthPortOptionSelector = portfolioOptionList.concat(` #list :nth-child(${portfolioPos})`);
    iClickOnElementWithTheSelector$(nthPortOptionSelector);

    // click workspace dropdown
    iClickOnElementWithTheSelector$(workspaceDropdownSelector);

    // click option at specified position
    const nthWorkOptionSelector = workspaceOptionList.concat(` #list :nth-child(${workspacePos})`);
    iClickOnElementWithTheSelector$(nthWorkOptionSelector);

  });

  When(/^I confirm portfolio\/workspace selection$/, () => {
    // click confirm button
    iClickOnElementWithTheSelector$(confirmSettingsButton);
  });

  When(/^I click the logout$/, () => {
    // click userWidget icon
    iClickOnElementWithTheSelector$(userWidgetSelector);

    // click option "exit"
    iClickOnElementWithTheSelector$(exitSelector);
  });

  When(/^I close the setting modal$/, () => {
    // click close modal button
    iClickOnElementWithTheSelector$(settingsModalCloseButton);
  });

  Then(/^the portfolio at position "([^"]*)" is "([^"]*)"$/, (position, name) => {
    // click userWidget icon
    iClickOnElementWithTheSelector$(userWidgetSelector);

    // click option "settings"
    iClickOnElementWithTheSelector$(settingsSelector);

    // click portfolio dropdown
    iClickOnElementWithTheSelector$(portfolioDropdownSelector);

    // inspect option at specified position
    const nthOptionSelector = portfolioOptionList.concat(` #list :nth-child(${position})`);
    return theElementWithSelector$ContainsText$(nthOptionSelector, name);
  });

  Then(/^the workspace at position "([^"]*)" is "([^"]*)"$/, (position, name) => {
    // click userWidget icon
    iClickOnElementWithTheSelector$(userWidgetSelector);

    // click option "settings"
    iClickOnElementWithTheSelector$(settingsSelector);

    // click workspace dropdown
    iClickOnElementWithTheSelector$(workspaceDropdownSelector);

    // inspect option at specified position
    const nthOptionSelector = workspaceOptionList.concat(` #list :nth-child(${position})`);
    theElementWithSelector$ContainsText$(nthOptionSelector, name);

    // click close modal button
    iClickOnElementWithTheSelector$(settingsModalCloseButton);
  });

  Then(/^the portfolio\/workspace with name "([^"]*)" is selected$/, name => {
    // inspect portfolio/workspace label
    return theElementWithSelector$ContainsText$(portfolioWorkspaceLabelSelector, name);
  });

  Then(/^the no-workflow element is visible$/, () => {
    const selector = 'h1';
    const msg = 'You have no workflow associated.';
    return theElementWithSelector$ContainsText$(selector, msg);
  });
});
