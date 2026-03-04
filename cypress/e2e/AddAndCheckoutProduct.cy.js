const {AddAndCheckoutProduct} = require("../fixtures/selectors.js");
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
describe('Given I am on the Product page', () => {
    beforeEach( function () {
        cy.visit('/')
    });
  it("Verify that user can Add product to cart and the product is visble inside the Cart", function(){
    cy.get(AddAndCheckoutProduct.usernameField).type(AddAndCheckoutProduct.standardUsername)
    cy.get(AddAndCheckoutProduct.passwordField).type(AddAndCheckoutProduct.password)
    cy.get(AddAndCheckoutProduct.loginBtn).click()
    cy.contains('Products').should('be.visible')
    cy.get(AddAndCheckoutProduct.addToCartButton).click()
    cy.get(AddAndCheckoutProduct.cartIcon).click()
    cy.contains('Sauce Labs Backpack').should('be.visible')
    });
  it("Verify that user can remove product from Cart", function(){
    cy.get(AddAndCheckoutProduct.usernameField).type(AddAndCheckoutProduct.standardUsername)
    cy.get(AddAndCheckoutProduct.passwordField).type(AddAndCheckoutProduct.password)
    cy.get(AddAndCheckoutProduct.loginBtn).click()
    cy.contains('Products').should('be.visible')
    cy.get(AddAndCheckoutProduct.addToCartButton).click()
    cy.get(AddAndCheckoutProduct.cartIcon).click()
    cy.get(AddAndCheckoutProduct.removeProductButton).click()
    });
  it("Verify that user can checkout product successfully", function(){
    cy.get(AddAndCheckoutProduct.usernameField).type(AddAndCheckoutProduct.standardUsername)
    cy.get(AddAndCheckoutProduct.passwordField).type(AddAndCheckoutProduct.password)
    cy.get(AddAndCheckoutProduct.loginBtn).click()
    cy.contains('Products').should('be.visible')
    cy.get(AddAndCheckoutProduct.addToCartButton).click()
    cy.get(AddAndCheckoutProduct.cartIcon).click()
    cy.get(AddAndCheckoutProduct.checkOutButton).click()
    cy.get(AddAndCheckoutProduct.firstNameField).type('Esther')
    cy.get(AddAndCheckoutProduct.lastNameField).type('Azeez')
    cy.get(AddAndCheckoutProduct.postalCodeField).type('1000113')
    cy.get(AddAndCheckoutProduct.continueButton).click()
    cy.get(AddAndCheckoutProduct.finishButton).click()
    cy.contains('Thank you for your order!').should('be.visible')
    });
  it("Verify that user cannot checkout product successfully when the First Name Field is Empty", function(){
    cy.get(AddAndCheckoutProduct.usernameField).type(AddAndCheckoutProduct.standardUsername)
    cy.get(AddAndCheckoutProduct.passwordField).type(AddAndCheckoutProduct.password)
    cy.get(AddAndCheckoutProduct.loginBtn).click()
    cy.contains('Products').should('be.visible')
    cy.get(AddAndCheckoutProduct.addToCartButton).click()
    cy.get(AddAndCheckoutProduct.cartIcon).click()
    cy.get(AddAndCheckoutProduct.checkOutButton).click()
    cy.get(AddAndCheckoutProduct.lastNameField).type('Azeez')
    cy.get(AddAndCheckoutProduct.postalCodeField).type('1000113')
    cy.get(AddAndCheckoutProduct.continueButton).click()
    cy.contains('Error: First Name is required').should('be.visible')
    });
  it("Verify that user cannot checkout product successfully when the Last Name Field is Empty", function(){
    cy.get(AddAndCheckoutProduct.usernameField).type(AddAndCheckoutProduct.standardUsername)
    cy.get(AddAndCheckoutProduct.passwordField).type(AddAndCheckoutProduct.password)
    cy.get(AddAndCheckoutProduct.loginBtn).click()
    cy.contains('Products').should('be.visible')
    cy.get(AddAndCheckoutProduct.addToCartButton).click()
    cy.get(AddAndCheckoutProduct.cartIcon).click()
    cy.get(AddAndCheckoutProduct.checkOutButton).click()
    cy.get(AddAndCheckoutProduct.firstNameField).type('Esther')
    cy.get(AddAndCheckoutProduct.postalCodeField).type('1000113')
    cy.get(AddAndCheckoutProduct.continueButton).click()
    });
  it("Verify that user cannot checkout product successfully when the Postal Code Field is Empty", function(){
    cy.get(AddAndCheckoutProduct.usernameField).type(AddAndCheckoutProduct.standardUsername)
    cy.get(AddAndCheckoutProduct.passwordField).type(AddAndCheckoutProduct.password)
    cy.get(AddAndCheckoutProduct.loginBtn).click()
    cy.contains('Products').should('be.visible')
    cy.get(AddAndCheckoutProduct.addToCartButton).click()
    cy.get(AddAndCheckoutProduct.cartIcon).click()
    cy.get(AddAndCheckoutProduct.checkOutButton).click()
    cy.get(AddAndCheckoutProduct.firstNameField).type('Esther')
    cy.get(AddAndCheckoutProduct.lastNameField).type('Azeez')
    cy.get(AddAndCheckoutProduct.continueButton).click()
    cy.contains('Error: Postal Code is required').should('be.visible')
    });
  it("Verify that user cannot checkout product when only First Name and Postal Code fields are filled", function(){
    cy.get(AddAndCheckoutProduct.usernameField).type(AddAndCheckoutProduct.standardUsername)
    cy.get(AddAndCheckoutProduct.passwordField).type(AddAndCheckoutProduct.password)
    cy.get(AddAndCheckoutProduct.loginBtn).click()
    cy.contains('Products').should('be.visible')
    cy.get(AddAndCheckoutProduct.addToCartButton).click()
    cy.get(AddAndCheckoutProduct.cartIcon).click()
    cy.get(AddAndCheckoutProduct.checkOutButton).click()
    cy.get(AddAndCheckoutProduct.firstNameField).type('Esther')
    cy.get(AddAndCheckoutProduct.postalCodeField).type('1000113')
    cy.get(AddAndCheckoutProduct.continueButton).click()
    cy.contains('Error: Last Name is required').should('be.visible')
    });
  it("Verify that user cannot checkout product when only Last Name and Postal Code fields are filled", function(){
    cy.get(AddAndCheckoutProduct.usernameField).type(AddAndCheckoutProduct.standardUsername)
    cy.get(AddAndCheckoutProduct.passwordField).type(AddAndCheckoutProduct.password)
    cy.get(AddAndCheckoutProduct.loginBtn).click()
    cy.contains('Products').should('be.visible')
    cy.get(AddAndCheckoutProduct.addToCartButton).click()
    cy.get(AddAndCheckoutProduct.cartIcon).click()
    cy.get(AddAndCheckoutProduct.checkOutButton).click()
    cy.get(AddAndCheckoutProduct.lastNameField).type('Azeez')
    cy.get(AddAndCheckoutProduct.postalCodeField).type('1000113')
    cy.get(AddAndCheckoutProduct.continueButton).click()
    cy.contains('Error: First Name is required').should('be.visible')
    });
  it("Verify that user cannot checkout product when only Last Name and Postal Code fields are filled", function(){
    cy.get(AddAndCheckoutProduct.usernameField).type(AddAndCheckoutProduct.standardUsername)
    cy.get(AddAndCheckoutProduct.passwordField).type(AddAndCheckoutProduct.password)
    cy.get(AddAndCheckoutProduct.loginBtn).click()
    cy.contains('Products').should('be.visible')
    cy.get(AddAndCheckoutProduct.addToCartButton).click()
    cy.get(AddAndCheckoutProduct.cartIcon).click()
    cy.get(AddAndCheckoutProduct.checkOutButton).click()
    cy.get(AddAndCheckoutProduct.firstNameField).type('Esther')
    cy.get(AddAndCheckoutProduct.lastNameField).type('Azeez')
    cy.get(AddAndCheckoutProduct.continueButton).click()
    cy.contains('Error: Postal Code is required').should('be.visible')
    });
});