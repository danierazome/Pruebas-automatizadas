Feature: Testing ghost app

@user1 @web
Scenario: Editar el idioma de las publicaciones de la página.
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/settings"
  And I wait for 2 seconds
  And I click a button "Click on the General page" 'a[href="#/settings/general/"]'
  And I wait for 2 seconds
  And I click a button "Click on the expand button" 'button[data-test-toggle-lang]'
  And I wait for 2 seconds
  And I fill with text a field "Edit Site title" 'input[data-test-input="locale"]' "es-test"
  And I wait for 2 seconds
  And I click a button "Click on the Save button" 'button[data-test-button="save"]'
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/settings"
  And I wait for 2 seconds
  And I click a button "Click on the General page" 'a[href="#/settings/general/"]'
  And I wait for 2 seconds