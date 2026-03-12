describe('Persons E2E (Cypress)', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display persons page', () => {
    cy.contains('h1', 'Pessoas').should('be.visible');
  });

  it('should have link to add new person', () => {
    cy.contains('Nova Pessoa').should('be.visible');
    cy.get('a[routerLink="/persons/new"]').should('exist');
  });

  it('should navigate to new person form', () => {
    cy.contains('Nova Pessoa').click();
    cy.url().should('include', '/persons/new');
    cy.contains('Nome').should('be.visible');
    cy.contains('E-mail').should('be.visible');
  });
});
