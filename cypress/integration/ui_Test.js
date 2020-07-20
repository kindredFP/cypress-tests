describe('My UI Test', () => {

  it('Navigate and click on button', () => {

    //Navigate to a page
    cy.visit('https://www.seleniumeasy.com/test/')

    cy.log('Click on the button with id="btn_basic_example"')
    cy.get('#btn_basic_example').click()

    // helps in debugging
    //cy.pause()

    cy.get('.list-group > [href="./basic-first-form-demo.html"]').contains('Simple Form Demo').click()

    //Find the link with an href attribute containing the word “questions” and click it
    // cy.get('a[href*="questions"]').click()

    cy.get('.form-group > #user-message').type('Hello')
    cy.get('#get-input > .btn').click()

    // Verify your on right page using a string on page
    cy.get('#display').contains('Hello')

  })

  it('Navigate and use drop down', () => {

    // Click on left side menu for drop down and then click on child option
    cy.get(':nth-child(3) > :nth-child(1) > .tree-indicator').click()
    cy.get(':nth-child(3) > :nth-child(1) > ul > :nth-child(4) > a').click()

    // Selecting the dropdown value
    cy.get('#select-demo').select('Friday')
    cy.get('.selected-value').contains('Friday')
  })

  it('Navigate and access sample tables', () => {

    // Click on left side menu for tables and then click on child option
    cy.get(':nth-child(3) > :nth-child(3) > [href="#"]').click()
    cy.get(':nth-child(3) > :nth-child(3) > ul > :nth-child(2) > a').click()

    cy.log('Verify a text on table')
    cy.get('#task-table > tbody > :nth-child(4) > :nth-child(3)').contains('Emily John')
  })

})