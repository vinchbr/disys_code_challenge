export const googlePage = {
  search: (searchTerm) => {
    cy.visit("/");
    cy.get('[title="Search"]').type(`${searchTerm}{enter}`);
  },
};
