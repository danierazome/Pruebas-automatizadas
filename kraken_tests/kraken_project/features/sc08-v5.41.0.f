Feature: Testing ghost app

@user2 @web
Scenario: Buscar post creado previamente por nombre de tag
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in 'input[class="gh-input email"]' 'input[class="gh-input password"]' 'button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon ember-view"]'
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/posts?tag=tag-numero-1"
  And I wait for 2 seconds
  Then I click a button "Click in the post found by tag" 'a[class="ember-view permalink gh-list-data gh-post-list-title"]'
  And I wait for 2 seconds
  Then I change sshots names