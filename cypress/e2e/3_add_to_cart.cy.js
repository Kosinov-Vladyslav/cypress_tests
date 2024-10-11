describe('Add To Cart Test', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should add multiple items to the cart', () => {

      const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];

      cy.addToCart(itemsToAdd);
      cy.get('.shopping_cart_badge').should('have.text', itemsToAdd.length);

  });

  it('should add a single item to the cart', () => {

      const itemToAdd = 'Sauce Labs Onesie';

      cy.addToCart([itemToAdd]);
      cy.get('.shopping_cart_badge').should('have.text', 1);

  });
});