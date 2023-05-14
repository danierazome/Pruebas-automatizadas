Feature: Testing ghost app

@user2 @web
Scenario: Crear Post y revisar que existe
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in
  And I wait for 5 seconds
  And I click a button "Click post btn in lateral menu" 'a[class="ember-view gh-secondary-action gh-nav-new-post"]'
  And I wait for 5 seconds
  And I fill with text a field "Fill Post title" 'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]' "Primer Post"
  And I fill with text a post desc "Este es mi primer post"
  And I wait for 2 seconds
  And I click a button "Click a publish btn" 'button[data-test-button="publish-flow"]'
  And I wait for 2 seconds
  And I click a button "Click a continue, final review btn" 'button[data-test-button="continue"]'
  And I wait for 2 seconds
  And I click a button "Click a publish post, right now btn" 'button[data-test-button="confirm-publish"]'
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/site"
  And I wait for 2 seconds
  And I click a button "Click a search btn in side menu" 'button[class="gh-nav-btn-search"]'
  And I wait for 3 seconds
  And I fill with text a field "Fill in with post name" 'input[class="gh-input-with-select-input"]' "P Post"
  And I wait for 3 seconds
  And I fill with text a field "Fill in with post name" 'input[class="gh-input-with-select-input"]' "Primer Post"
  And I wait for 3 seconds
  Then I click a btn "Click the search result" 'li[class="ember-power-select-option"]'
  And I wait for 3 seconds
  Then I change sshots names