/*eslint-env node*/

const { defineSupportCode } = require('cucumber');
const {
  iClickOnElementWithTheSelector$,
  theElementWithSelector$IsVisible,
  theElementWithSelector$ContainsText$,
} = require('../_elements.js');

defineSupportCode(({ Then }) => {

  Then(/^the oauth message with wrong username\/password is visible$/, () => {
    const selector = '#authform div.error span.note-clab';
    const msg = 'That username/password combination is not valid';
    return theElementWithSelector$ContainsText$(selector, msg);
  });

  Then(/^the un-authorized element is visible$/, () => {
    const selector = 'un-authorized > h1';
    const msg = 'You have no permissions for viewing this application.';
    return theElementWithSelector$ContainsText$(selector, msg);
  });

  Then(/^the user is logged-in$/, () => {
    const selector = '<%= appName %>';
    return theElementWithSelector$IsVisible(selector);
  });

  Then(/^I make the logout from un-authorized page$/, () => {
    const selector = 'un-authorized > button';
    // click logout button
    return iClickOnElementWithTheSelector$(selector);
  });
});
