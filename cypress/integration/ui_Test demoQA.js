///<reference types='cypress' />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Another UI Test', () => {

  it('Navigate to demoqa.com site and click on Elements Section', () => {

    //Navigate to a page
    cy.visit('https://demoqa.com/')

    cy.log('Click on the Elements section')
    cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()

    // Select Text Box
    cy.get('#item-0').click()

    cy.get('#userName').type('Entering Full Name')
  })

/* 
  it('Select Forms', () => {

    cy.log('Click on the Forms section - > Practice Form')
    cy.get('.header-wrapper').contains('Form').click()
    cy.get('.text').contains('Practice Form').click()

  }) */

})