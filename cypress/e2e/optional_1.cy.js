describe('Optional Tests', () => {
  beforeEach(() => {
      cy.login();
  });
//handling errors during checkout
  it('should log out after completing the checkout', () => {
      const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light']; 

      cy.addToCart(itemsToAdd);

      cy.get('.shopping_cart_link').click();

      cy.get('.checkout_button').click();

      cy.get('input#first-name').type('John');
      cy.get('input#last-name').type('Doe');
      cy.get('input#postal-code').type('12345');
      cy.get('.btn_primary.cart_button').click(); 

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


//verifying inventory status checkout
  it('should reset cart to zero after completing the checkout', () => {
    const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];
    cy.addToCart(itemsToAdd);

    cy.get('.shopping_cart_badge').should('contain', itemsToAdd.length);

    cy.get('.shopping_cart_link').click();
    cy.get('.checkout_button').click();
    cy.get('input#first-name').type('John');
    cy.get('input#last-name').type('Doe');
    cy.get('input#postal-code').type('12345');
    cy.get('.btn_primary.cart_button').click(); 


    cy.get('.btn_action.cart_button').click(); 

    
    cy.get('#back-to-products').click();

    
    cy.get('.shopping_cart_badge').should('not.exist');

  
    cy.get('.inventory_item').should('have.length.greaterThan', 0); 
});
//adding more items to cart after checkout
 it('should allow adding new items to the cart after completing checkout', () => {
        const initialItems = ['Sauce Labs Backpack'];
        cy.addToCart(initialItems);

        cy.get('.shopping_cart_link').click();
        cy.get('.checkout_button').click();
        cy.get('input#first-name').type('John');
        cy.get('input#last-name').type('Doe');
        cy.get('input#postal-code').type('12345');
        cy.get('.btn_primary.cart_button').click();
        cy.get('.btn_action.cart_button').click(); 

     
        cy.get('#back-to-products').click();

        cy.get('.shopping_cart_badge').should('not.exist');

        const newItems = ['Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];
        cy.addToCart(newItems);

        cy.get('.shopping_cart_badge').should('contain', newItems.length);

        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item').should('have.length', newItems.length); 
    });
});