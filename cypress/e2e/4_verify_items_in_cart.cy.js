describe('Verify Items In Cart Test', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should add multiple items to the cart and verify the cart count', () => {
    
      const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];
      
      cy.addToCart(itemsToAdd);
      cy.get('.shopping_cart_badge').should('be.visible')
        .and('have.text', itemsToAdd.length);

      cy.get('.shopping_cart_link').click(); 
      itemsToAdd.forEach(item => {
          cy.contains(item).should('be.visible'); 
      });
  });
});