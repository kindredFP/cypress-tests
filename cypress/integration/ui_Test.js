describe('My UI Test', () => {

  it('Navigate and click on button', () => {
    cy.visit('https://www.seleniumeasy.com/test/')

    cy.log('Click on the button')
    cy.get('#btn_basic_example').click()


    // Verify your on right page using some string on page
    cy.get('.list-group > [href="./basic-first-form-demo.html"]').contains('Simple Form Demo').click()

    cy.get('.form-group > #user-message').type('Hello')
    cy.get('#get-input > .btn').click()

    cy.get('#display').contains('Hello')

  })

  it('Navigate and use drop down', () => {
    cy.get(':nth-child(3) > :nth-child(1) > .tree-indicator').click()
    cy.get(':nth-child(3) > :nth-child(1) > ul > :nth-child(4) > a').click()

    // Selecting the dropdown value
    cy.get('#select-demo').select('Friday')
    cy.get('.selected-value').contains('Friday')
  })

  it('Navigate and access tables', () => {
    cy.get(':nth-child(3) > :nth-child(3) > [href="#"]').click()
    cy.get(':nth-child(3) > :nth-child(3) > ul > :nth-child(2) > a').click()

    cy.get('#task-table > tbody > :nth-child(4) > :nth-child(3)').contains('Emily John')
  })
  
})