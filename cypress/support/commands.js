
//Add items to cart
Cypress.Commands.add('addToCart', (items) => {
    items.forEach(item => {
        cy.get('.inventory_item').contains(item).parents('.inventory_item')
            .find('.btn_inventory')
            .click(); 
    });
});
//Login
Cypress.Commands.add('login', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('input#user-name').type('standard_user');
    cy.get('input#password').type('secret_sauce');
    cy.get('input[type="submit"]').click();
});
//Input information
Cypress.Commands.add('inputInfo', () => {
      cy.get('input#first-name').type('Vladyslav');
      cy.get('input#last-name').type('Kosinov');
      cy.get('input#postal-code').type('11111');
      cy.get('.btn_primary.cart_button').click();
});