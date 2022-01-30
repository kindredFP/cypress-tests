///<reference types='cypress' />

describe('Simple React UI Test', () => {

    it('Navigate to https://reactjs.org/ site and click on Community Section', () => {
  
      //Navigate to a page
      cy.visit('https://reactjs.org/')
  
      cy.log('Click on the Community section')
      cy.get('.css-79txt3 > [href="/community/support.html"]').click()

      // Click Courses Section
      cy.get(':nth-child(3) > .css-19pur11').click()
    })  
  })