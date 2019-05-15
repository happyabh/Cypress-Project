describe('My First Test', function() {
  it('finds the content "type"', function() {
    cy.visit('https://id-test.yousee.dk/')

    cy.contains('type')

    cy.contains ('Har du glemt dit brugernavn ?').click();

  })
})