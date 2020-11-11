'use strict';

describe('Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it(`The first promise should be resolved on a left 'click' in 'document'.`, () => {
    cy.get('.logo').click({ force: true });
    cy.get('.message').contains('Promise was resolved!');
  });

  it(`The second promise should be rejected in 5 seconds.`, () => {
    cy.wait(1000);
    cy.get('.error-message').contains('Promise was rejected!');
  });

  it(`Right 'click' should bot resolve a promise.`, () => {
    cy.get('.logo').rightclick({ force: true });
    cy.get('.message').should('not.visible');
  });

  it(`Any logs should not be present to console.`, () => {
    cy.get('.logo').click({ force: true });
    cy.wait(5000);

    cy.window().then((win) => {
      expect(win.console.error).to.have.callCount(0);
      expect(win.console.warn).to.have.callCount(0);
      expect(win.console.log).to.have.callCount(0);
    });
  });
});
