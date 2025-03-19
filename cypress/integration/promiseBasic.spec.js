'use strict';

describe('Promise basic app', () => {
  beforeEach(() => {
    // to prevent Cypress from failing tests on uncaught promise rejection
    cy.once('uncaught:exception', () => false);

    cy.visit('/');
  });

  it(`should resolve first promise by click on logo`, () => {
    cy.get('.logo').click();
    cy.get('.message:not(.error-message)').contains('Promise was resolved!');
  });

  it(`should reject second promise in 3 seconds`, () => {
    cy.clock();
    cy.tick(3000);
    cy.get('.error-message').contains('Promise was rejected!');
  });

  it(`shouldn't resolve any promise by right click`, () => {
    cy.get('.logo').rightclick();
    cy.get('.message:not(.error-message)').should('not.exist');
  });
});
