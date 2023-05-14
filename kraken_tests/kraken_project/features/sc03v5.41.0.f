Feature: Testing ghost app

@user2 @web
Scenario: Buscar post creado previamente y editarlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/site"
  And I wait for 2 seconds
  And I click a button "Click a search btn in side menu" 'button[class="gh-nav-btn-search"]'
  And I wait for 3 seconds
  And I fill with text a field "Fill in with post name" 'input[class="gh-input-with-select-input"]' "pp pos"
  And I wait for 3 seconds
  And I fill with text a field "Fill in with post name" 'input[class="gh-input-with-select-input"]' "Primer Post"
  And I wait for 3 seconds
  And I click a btn "Click the search result" 'li[class="ember-power-select-option"]'
  And I wait for 3 seconds
  And I fill with text a field "Fill Post title" 'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]' "Tercer Post"
  And I wait for 2 seconds
  And I fill with text a post desc "Este es mi tercer post"
  And I wait for 2 seconds
  And I click a button "Click a publish btn" 'button[data-test-button="publish-save"]'
  And I wait for 2 seconds
  Then I navigate to page "http://localhost:2368/ghost/#/site"
  And I wait for 2 seconds
  Then I change sshots names