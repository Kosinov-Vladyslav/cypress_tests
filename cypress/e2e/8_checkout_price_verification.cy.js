describe('Checkout Price Verification', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should display the correct total price with tax on the Checkout: Overview page', () => {
      const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light']; 

   
      cy.addToCart(itemsToAdd);

      cy.get('.shopping_cart_link').click();

      cy.get('.checkout_button').click();

      cy.inputInfo();


      cy.url().should('include', '/checkout-step-two.html');

  
      cy.get('.cart_item').should('have.length', itemsToAdd.length); 

      cy.get('.summary_total_label').should('be.visible');
      cy.get('.summary_tax_label').should('be.visible');
      cy.get('.summary_total_label').should('contain', 'Total: $');
      cy.get('.summary_tax_label').should('contain', 'Tax: $');
      
      
      cy.get('.summary_subtotal_label').invoke('text').then((subtotalText) => {
          const subtotal = parseFloat(subtotalText.replace('Item total: $', '').trim());

          cy.get('.summary_tax_label').invoke('text').then((taxText) => {
              const tax = parseFloat(taxText.replace('Tax: $', '').trim());

              cy.get('.summary_total_label').invoke('text').then((totalText) => {
                  const total = parseFloat(totalText.replace('Total: $', '').trim());

                 
                  expect(total).to.eq(subtotal + tax);
              });
          });
      });
  });
});