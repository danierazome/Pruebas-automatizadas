Feature: Testing ghost app

@user1 @web
Scenario: Editar la zona horaria de la pagina
Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/settings"
  And I wait for 2 seconds
  And I click a button "Click on the General page" 'a[href="#/settings/general/"]'
  And I wait for 2 seconds
  And I click a button "Click on the expand button" 'button[data-test-toggle-timezone]'
  And I wait for 2 seconds
  And I click a button "Click on the expand timezone menu" 'select[name="general[timezone]"]'
  And I wait for 2 seconds
  And I click a button "Click on the timezone" 'option[value="America/Bogota"]'
  And I wait for 2 seconds
  And I click a button "Click on the Save button" 'button[data-test-button="save"]'
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/settings"
  And I wait for 2 seconds
  And I click a button "Click on the General page" 'a[href="#/settings/general/"]'
  And I wait for 2 seconds