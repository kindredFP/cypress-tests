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

  /*
  it('Navigate and click on button', () => {

  })
  */

})