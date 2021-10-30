Feature: SignUp, Sign In and purchanse a product

    Scenario: TC-001 Create New User/SignUp
        Given I am on the home page
        When  Navigate to SignUp Page and Create New user
        Then   Logout and login again with created new user

    Scenario: TC-002 Sign In With newly created user credentials and purchase a product
        Given I am on the Home page
        When  I Select a product and Added to the cart
        Then  I Proceed to the checkout page and continue till payment and Confirm Order
