describe('SHUI spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/Write');
  })
  it ('should write in input then creat the note', () => {
    const write = 'Jag vill göra något meningsfullt idag.';
    const userName = 'Adam';

    cy.get('[data-id="Text"]').type(write);
    cy.get('[data-id="Username"]').type(userName);
    cy.get('[data-id="Publish"]').click();
  });
  it ('should go and create a new note', () => {
    const write = 'Jag vill göra något meningsfullt idag.';
    cy.wait(3000);

    cy.get('[data-id="Text"]').type(write);
    cy.get('[data-id="Publish"]').click();
    cy.get('[data-id="NoteText"]').first().should('have.text', 'Jag vill göra något meningsfullt idag.');
  });
}); 