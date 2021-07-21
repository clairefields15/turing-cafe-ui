describe('Dashboard view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should expect true to equal true', () => {
    expect(true).to.equal(true);
  });

  it('should display a dashboard with a form', () => {
    cy.get('h1');
    cy.contains('Turing Cafe Reservations');
    cy.get('button');
    cy.contains('Make Reservation');
    cy.get('form');
    cy.should('have.descendants', 'input');
  });

  it('should display reservations', () => {
    cy.get('h1');
    cy.contains('Turing Cafe Reservations');
    cy.intercept('http://localhost:3001/api/v1/reservations', {
      response: 200,
      fixture: 'reservations.json'
    });
    cy.visit('http://localhost:3000/');
    cy.get('.card-container');
    cy.contains('Christie');
    cy.contains('12/29');
    cy.contains('7:00 pm');
    cy.contains('Number of guests: 12');
    cy.get('button');
    cy.contains('Cancel');
  });

  it('should display a different reservation', () => {
    cy.get('h1');
    cy.contains('Turing Cafe Reservations');
    cy.intercept('http://localhost:3001/api/v1/reservations', {
      response: 200,
      fixture: 'reservations.json'
    });
    cy.visit('http://localhost:3000/');
    cy.get('.card-container');
    cy.contains('Leta');
    cy.contains('4/5');
    cy.contains('7:00 pm');
    cy.contains('Number of guests: 2');
  });
});
