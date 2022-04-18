describe('Test: 59191494', () => {
  it('should be true', () => {
    cy.visit('https://www.migrationsverket.se/English/Contact-us/Check-your-application-without-logging-in.html')
    cy.get('input[value="KONTROLLNR"]').click({ force: true })
    cy.get('input[pattern="[0-9]*"]').type("59191494")
    cy.get('input[value="Search"]').click()
    cy.get('.statusbar > li:nth-child(3)').should('have.class', 'active')
  })
})