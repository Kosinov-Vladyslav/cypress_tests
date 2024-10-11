describe('Checkout Submission Verification', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should display Checkout: Complete! page after submitting the checkout', () => {
      const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light']; 

      cy.addToCart(itemsToAdd);

      cy.get('.shopping_cart_link').click();

      cy.get('.checkout_button').click();

      cy.inputInfo();


      cy.url().should('include', '/checkout-step-two.html');

     
      cy.get('.btn_action.cart_button').click(); 


      cy.url().should('include', '/checkout-complete.html');
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
      cy.get('.complete-text').should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  });
});