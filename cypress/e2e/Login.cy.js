const {Login} = require("../fixtures/selectors.js");
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
describe('Given I am on the Login page', () => {
    beforeEach( function () {
        cy.visit('/')
    });
  it("Verify that user can Login as a standard user with valid credential", function(){
    cy.get(Login.usernameField).type(Login.standardUsername)
    cy.get(Login.passwordField).type(Login.password)
    cy.get(Login.loginBtn).click()
    cy.contains('Products').should('be.visible')
    });
  it("Verify that user cannot Login as a standard user with incorrect username and valid password", function(){
    cy.get(Login.usernameField).type('invalid_user')
    cy.get(Login.passwordField).type(Login.password)
    cy.get(Login.loginBtn).click()
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    });
  it("Verify that user cannot Login as a standard user with valid username and incorrect password", function(){
    cy.get(Login.usernameField).type(Login.standardUsername)
    cy.get(Login.passwordField).type("Password111")
    cy.get(Login.loginBtn).click()
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    });
  it("Verify that user cannot login into the application with a locked out user", function(){
    cy.get(Login.usernameField).type(Login.lockedOutUsername)
    cy.get(Login.passwordField).type(Login.password)
    cy.get(Login.loginBtn).click()
    cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')
    });
  it("Verify that user can Login as a Problem user with valid credential", function(){
    cy.get(Login.usernameField).type(Login.problemUsername)
    cy.get(Login.passwordField).type(Login.password)
    cy.get(Login.loginBtn).click()
    cy.contains('Products').should('be.visible')
  });
    it("Verify that user cannot Login as a Problem user with incorrect username and valid password", function(){
    cy.get(Login.usernameField).type('invalid_problem_user')
    cy.get(Login.passwordField).type(Login.password)
    cy.get(Login.loginBtn).click()
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    });
  it("Verify that user cannot Login as a Problem user with valid username and incorrect password", function(){
    cy.get(Login.usernameField).type(Login.problemUsername)
    cy.get(Login.passwordField).type("Password111")
    cy.get(Login.loginBtn).click()
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    });
  it("Verify that user can Login as a Performace Glitch user with valid credential", function(){
    cy.get(Login.usernameField).type(Login.performanceGlitchUsername)
    cy.get(Login.passwordField).type(Login.password)
    cy.get(Login.loginBtn).click()
    cy.contains('Products').should('be.visible')
  });
    it("Verify that user cannot Login as a Performace Glitch user with incorrect username and valid password", function(){
    cy.get(Login.usernameField).type('invalid_performance_glitch_user')
    cy.get(Login.passwordField).type(Login.password)
    cy.get(Login.loginBtn).click()
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    });
  it("Verify that user cannot Login as a Performace Glitch user with valid username and incorrect password", function(){
    cy.get(Login.usernameField).type(Login.performanceGlitchUsername)
    cy.get(Login.passwordField).type("Password111")
    cy.get(Login.loginBtn).click()
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    });
  it("Verify that user can Login as a Error user with valid credential", function(){
    cy.get(Login.usernameField).type(Login.errorUsername)
    cy.get(Login.passwordField).type(Login.password)
    cy.get(Login.loginBtn).click()
    cy.contains('Products').should('be.visible')
  });
    it("Verify that user cannot Login as a Error user with incorrect username and valid password", function(){
    cy.get(Login.usernameField).type('invalid_error_user')
    cy.get(Login.passwordField).type(Login.password)
    cy.get(Login.loginBtn).click()
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    });
  it("Verify that user cannot Login as a Error user with valid username and incorrect password", function(){
    cy.get(Login.usernameField).type(Login.errorUsername)
    cy.get(Login.passwordField).type("Password111")
    cy.get(Login.loginBtn).click()
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    });
  it("Verify that user can Login as a Visual user with valid credential", function(){
    cy.get(Login.usernameField).type(Login.visualUsername)
    cy.get(Login.passwordField).type(Login.password)
    cy.get(Login.loginBtn).click()
    cy.contains('Products').should('be.visible')
  });
    it("Verify that user cannot Login as a Visual user with incorrect username and valid password", function(){
    cy.get(Login.usernameField).type('invalid_visual_user')
    cy.get(Login.passwordField).type(Login.password)
    cy.get(Login.loginBtn).click()
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    });
  it("Verify that user cannot Login as a Visual user with valid username and incorrect password", function(){
    cy.get(Login.usernameField).type(Login.visualUsername)
    cy.get(Login.passwordField).type("Password111")
    cy.get(Login.loginBtn).click()
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    });
  });