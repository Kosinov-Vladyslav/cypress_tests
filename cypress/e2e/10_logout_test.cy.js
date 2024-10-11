describe('Logout After Checkout', () => {
  beforeEach(() => {
     cy.login();
  });

  it('should log out after completing the checkout', () => {
   
      const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light']; 

      
      cy.addToCart(itemsToAdd);

      cy.get('.shopping_cart_link').click();

      cy.get('.checkout_button').click();

      cy.inputInfo();

      cy.url().should('include', '/checkout-step-two.html');

      cy.get('.btn_action.cart_button').click(); 

    
      cy.url().should('include', '/checkout-complete.html');
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
      
      
      cy.get('#back-to-products').click(); 

    
      cy.url().should('include', '/inventory.html');

   
      cy.get('#react-burger-menu-btn').click(); 
      cy.get('#logout_sidebar_link').click(); 

  
      cy.url().should('include', '/');
      cy.get('input#user-name').should('be.visible');
      cy.get('input#password').should('be.visible');
      cy.get('input[type="submit"]').should('be.visible');
  });
});