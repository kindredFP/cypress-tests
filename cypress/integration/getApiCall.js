import { baseUrl } from '../../cypress';


describe("/posts API", () => {
  it('Headers and content type check', () => {
    cy.request("posts")
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  })

    it('Status Code 200 Check', () => {
    cy.request('posts')
      .its('status')
      .should('equal', 200);
  })


    it('method, url and body check', () => {
   cy.request('POST', 'https://postman-echo.com/post').its('status')
      .should('equal', 200);
  })


});
