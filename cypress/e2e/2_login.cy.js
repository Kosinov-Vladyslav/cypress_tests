describe('Login Page Test', () => {
  beforeEach(() => {
    
    cy.visit('https://www.saucedemo.com/');

  });


it('login page is successfully loaded', () => {

  cy.url().should('include', 'saucedemo');
  cy.get('.login-box'). should('be.visible');

});

it('users with valid credentials can successfully log in', () => {

  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
  cy.url().should('include', '/inventory.html')

});

it('users with invalid credetials cant log in', () => {
  
  cy.get('#user-name').type('wrong_user');
  cy.get('#password').type('wrong_password');
  cy.get('#login-button').click();
  cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service'); // Check for error message

});


});