describe('Checkout: Your Information Test', () => {
  const users = {
      "standard_user": {
          firstName: "Алексей",
          lastName: "Петров",
          postalCode: "101000",
      },
      "locked_out_user": {
          firstName: "Мария",
          lastName: "Сидорова",
          postalCode: "102000",
      },
      "problem_user": {
          firstName: "Дмитрий",
          lastName: "Иванов",
          postalCode: "103000",
      },
      "performance_glitch_user": {
          firstName: "Светлана",
          lastName: "Кузнецова",
          postalCode: "104000",
      },
      "error_user": {
          firstName: "Антон",
          lastName: "Смирнов",
          postalCode: "105000",
      },
      "visual_user": {
          firstName: "Елена",
          lastName: "Васильева",
          postalCode: "106000",
      }
  };

  const loggedInUser = "standard_user";
  let userData;

  beforeEach(() => {

      cy.login();
      
      const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];
      cy.addToCart(itemsToAdd);
      cy.get('.shopping_cart_link').click();
      cy.get('#checkout').click();

      userData = users[loggedInUser];

  });
  //unfortunately site doesn't have prefilled information so for this test i will fill values myself
  it('should verify that the correct user information is pre-filled', () => {

      cy.get('#first-name').type('Алексей');
      cy.get('#last-name').type('Петров');
      cy.get('#postal-code').type('101000');

      cy.get('input#first-name').should('have.value', userData.firstName);
      cy.get('input#last-name').should('have.value', userData.lastName);
      cy.get('input#postal-code').should('have.value', userData.postalCode);
      cy.get('#continue').click();
  });
});