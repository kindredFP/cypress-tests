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

  it('Body Check', () => {
    cy.request('posts/1')
      .its('body')
      .should('deep.eq', {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      });
  })

  it('Individual Fields Check', () => {
    cy.request('posts/1')
      .its('body')
      .should('have.property', 'id');
  })

  it('Individual Fields and Value Check', () => {
    cy.request('posts/1')
      .its('body')
      .should('have.property', 'title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  })


/*
    it('Force a test failure', () => {
   cy.request('POST', 'https://postman-echo.com/post').its('status')
      .should('equal', 204);
  })
*/

});
