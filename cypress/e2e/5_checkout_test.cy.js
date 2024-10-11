describe('Checkout Test', () => {
  beforeEach(() => {
      cy.login();
      const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];
      cy.addToCart(itemsToAdd);
  });

  it('should verify items in the cart and proceed to checkout', () => {

      cy.get('.shopping_cart_link').click(); 

      const expectedItems = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];
      expectedItems.forEach(item => {
          cy.contains(item).should('be.visible');
      });

      cy.get('.checkout_button').click();
      cy.inputInfo();

      
      expectedItems.forEach(item => {
          cy.contains(item).should('be.visible');
      });
  });
});