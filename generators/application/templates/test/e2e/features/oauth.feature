@oauth @login @<%= appName %>

Feature: OAuth

  #Background:

  Scenario: Login with bad credentials
    Given I open the homepage
    And the title is "Account central"
    When I make the login with username "wrong-user" and password "wrong-password"
    Then the title is "Account central"
    Then the oauth message with wrong username/password is visible
