
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

  it('Individual Fields and Value Check', () => {
    cy.request('posts/1')
      .its('body')
      .should('have.property', 'title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  })

  it('Inner Fields Check', () => {
    cy.request('users/1')
      .its('body')
      .then((response) => {
          //expect(response.body).to.have.property('errors[0].status')
          const innerJson = response.address.geo;
          expect(innerJson).to.have.property('lat')
        })
  })
  /****
  Sample json with inner fields
  {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
  ****/
});
