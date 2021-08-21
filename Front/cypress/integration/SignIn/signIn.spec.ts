describe('SignIn', function () {
  it('types email', function () {
    cy.visit('/login');
    cy.get('[data-cy=email]')
      .type('doy2021@gmail.com')
      .should('have.value', 'doy2021@gmail.com');
  });

  it('types password', function () {
    cy.visit('/login');
    cy.get('[data-cy=password]')
      .type('Doy135724!')
      .should('have.value', 'Doy135724!');
  });

  it('clicks sign in button without setting cookies', function () {
    cy.visit('/login');
    cy.get('[data-cy=email]')
      .type('doy2021@gmail.com')
      .get('[data-cy=password]')
      .type('Doy135724!')
      .get('[data-cy=checkbox-txt]')
      .click()
      .get('[data-cy=signin_btn]')
      .click();
  });

  it('clicks sign in button and sets login token in cookies', function () {
    cy.visit('/login');
    cy.get('[data-cy=email]')
      .type('doy2021@gmail.com')
      .get('[data-cy=password]')
      .type('Doy135724!')
			.get('[data-cy=signin_btn]')
      .click()
      .getCookie('user_id')
      .should('exist');
  });
});
