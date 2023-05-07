Feature: Testing ghost app

@user2 @web
Scenario: Buscar post creado previamente por nombre de tag
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/posts?tag=tag-numero-3"
  And I wait for 2 seconds
  Then I click a button "Click in the post found by tag" 'a[class="ember-view permalink gh-list-data gh-post-list-title"]'
  And I wait for 2 seconds
