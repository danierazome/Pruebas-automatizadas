Feature: Testing ghost app

@user2 @web
Scenario: Crear Post y revisar que existe
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 5 seconds
  When I log in 'input[class="email ember-text-field gh-input ember-view"]' 'input[class="password ember-text-field gh-input ember-view"]' 'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
  And I wait for 5 seconds
  And I click a button "Click post btn in lateral menu" 'a[class="gh-secondary-action gh-nav-new-post ember-view"]'
  And I wait for 5 seconds
  And I fill with text a field "Fill Post title" 'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]' "Primer Post"
  And I fill with text a post desc "Este es mi primer post"
  And I wait for 2 seconds
  And I click a button "Deploy a dropdown publish menu" 'div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]'
  And I wait for 2 seconds
  And I click a button "Click a publish btn" 'button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]'
  And I wait for 2 seconds
  And I navigate to page "http://localhost:3001/ghost/#/site"
  And I wait for 2 seconds
  And I click a button "Click a search btn in side menu" 'button[class="gh-nav-btn-search"]'
  And I wait for 3 seconds
  And I fill with text a field "Fill in with post name" 'input[type="search"]' "P Post"
  And I wait for 3 seconds
  And I fill with text a field "Fill in with post name" 'input[type="search"]' "Primer Post"
  And I wait for 3 seconds
  Then I click a btn "Click the search result" 'li[class="ember-power-select-option"]'
  And I wait for 3 seconds
  Then I change sshots names
