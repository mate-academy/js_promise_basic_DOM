'use strict';

describe('Promise basic app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it(`should resolve first promise by click on logo`, () => {
    cy.get('.logo').click({ force: true });
    cy.get('.message').contains('Promise was resolved!');
  });

  it(`should reject second promise in 3 seconds`, () => {
    cy.get('.error-message', { timeout: 3000 })
      .contains('Promise was rejected!');
  });

  it(`shouldn't resolve any promise by right click`, () => {
    cy.get('.logo').rightclick({ force: true });
    cy.get('.message').should('not.visible');
  });
});
