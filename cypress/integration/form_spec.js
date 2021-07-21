describe('Reservation Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should expect true to equal true', () => {
    expect(true).to.equal(true);
  });

  it('should be able to type into the form', () => {
    cy.get('#nameInput')
      .type('Claire Fields')
      .should('have.value', 'Claire Fields');
    cy.get('#dateInput').type('3/19').should('have.value', '3/19');
    cy.get('#timeInput').type('8:00').should('have.value', '8:00');
    cy.get('#numberInput').type('2').should('have.value', '2');
  });

  it('should be able to make a reservation and see it on the page', () => {
    cy.get('#nameInput')
      .type('Claire Fields')
      .should('have.value', 'Claire Fields');
    cy.get('#dateInput').type('3/19').should('have.value', '3/19');
    cy.get('#timeInput').type('8:00').should('have.value', '8:00');
    cy.get('#numberInput').type('2').should('have.value', '2');
    cy.get('#makeResyBtn').click();
    cy.get('#nameInput').should('have.value', '');
    cy.get('#dateInput').should('have.value', '');
    cy.get('#timeInput').should('have.value', '');
    cy.get('#numberInput').should('have.value', '');
    cy.get('.card-container');
    cy.contains('Claire Fields');
    cy.contains('3/19');
    cy.contains('8:00 pm');
    cy.contains('Number of guests: 2');
    cy.get('button');
    cy.contains('Cancel');
  });
});
