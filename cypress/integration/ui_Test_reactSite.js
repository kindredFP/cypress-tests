///<reference types='cypress' />

describe('Simple React UI Test', () => {

    it('Navigate to https://reactjs.org/ site and click on Community Section', () => {
  
      //Navigate to a page
      cy.visit('https://reactjs.org/')
  
      cy.log('Click on the Community section')

      //Setting an Alias
      cy.get('.css-79txt3 > [href="/community/support.html"]').as('communityMenu');
      
      //Assertion
      cy.get('@communityMenu').contains('Community')
      
      //Navigation
      cy.get('@communityMenu').click()

      // Click Courses Section
      cy.get(':nth-child(3) > .css-19pur11').as('coursesLink')
      cy.get('@coursesLink').click()

      // Assert these values are showing on screen.
      cy.log('Asserting values on screen.')
      cy.contains('Glitch')
      cy.contains('Free React Bootcamp')
    })  
  })