/* eslint-disable no-undef */
context("Revision section", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/revisions");
  });

  it("Should cards to review depending on the number of overdue", () => {
    cy.contains("Geografia").parents("li").contains("3");
  });
});
