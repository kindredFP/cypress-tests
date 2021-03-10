/// <reference types="Cypress" />
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
      .should('have.property', 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  })

  it('Inner Json Field Check', () => {
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

  it('Verify different elements on different sections of the array', () => {
    cy.request('users')
      .its('body')
      .then((response) => {

        let firstElement = response[0].name;
        let firstDataSet = JSON.stringify(response[0]);
        let innerJsonValueZipCode = JSON.stringify(response[0].address.zipcode)

        console.log("Logs in console tab in developer tools value of name in firstElement:  " + firstElement);
        cy.log("Logs in Test Run and the value of the firstDateSet:  " + firstDataSet);

        expect(firstElement).to.have.string('Leanne Graham');
        expect(innerJsonValueZipCode).to.have.string('92998-3874');
        expect(firstDataSet).to.have.string('{\"id\":1,\"name\":\"Leanne Graham\",\"username\":\"Bret\",\"email\":\"Sincere@april.biz\",\"address\":{\"street\":\"Kulas Light\",\"suite\":\"Apt. 556\",\"city\":\"Gwenborough\",\"zipcode\":\"92998-3874\",\"geo\":{\"lat\":\"-37.3159\",\"lng\":\"81.1496\"}},\"phone\":\"1-770-736-8031 x56442\",\"website\":\"hildegard.org\",\"company\":{\"name\":\"Romaguera-Crona\",\"catchPhrase\":\"Multi-layered client-server neural-net\",\"bs\":\"harness real-time e-markets\"}}')
      })
  })

  /***** Sample of 2 elements that we access
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
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }, 
 
   ***********/

  /**
   * Looks like more control when we verify without 
   * '.its('body')'
   */
  it('Using without .its(body)', () => {
    cy.request('users')
      .then((response) => {

        let responseBody = response.body;
        let firstElement = responseBody[0].name; // access a specific entry
        let firstDataSet = JSON.stringify(responseBody[0]); // access the full object
        let innerJsonValueZipCode = JSON.stringify(responseBody[0].address.zipcode)

        cy.log("FirstDateSet:  " + firstDataSet);
        cy.log("responseBody:  " + responseBody);
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(10);
        expect(firstElement).to.have.string('Leanne Graham');
        expect(innerJsonValueZipCode).to.have.string('92998-3874');
        expect(firstDataSet).to.have.string('{\"id\":1,\"name\":\"Leanne Graham\",\"username\":\"Bret\",\"email\":\"Sincere@april.biz\",\"address\":{\"street\":\"Kulas Light\",\"suite\":\"Apt. 556\",\"city\":\"Gwenborough\",\"zipcode\":\"92998-3874\",\"geo\":{\"lat\":\"-37.3159\",\"lng\":\"81.1496\"}},\"phone\":\"1-770-736-8031 x56442\",\"website\":\"hildegard.org\",\"company\":{\"name\":\"Romaguera-Crona\",\"catchPhrase\":\"Multi-layered client-server neural-net\",\"bs\":\"harness real-time e-markets\"}}')
      })
  })
});
