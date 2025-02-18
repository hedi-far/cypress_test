describe('My First Test', () => {
  it('Visits the Start Page', () => {
    cy.visit('http://localhost:8080/')
  })
})


describe('My First Test', () => {
  it('finds the content "Welcome"', () => {
    cy.visit('http://localhost:8080/')

    cy.contains('Welcome')
  })
})

describe('My First Test', () => {
  it('checks the formatting of API_NAME"', () => {
    cy.visit('http://localhost:8080/')

    cy.get('code').contains('API_NAME');
  })
})


/*

describe('My First Test', () => {
  it('clicks the link "About" on Start Page', () => {
    cy.visit('http://localhost:8080')

    cy.contains('About').click()
  })
})


describe('My First Test', () => {
  it('clicking "About" navigates to a new url', () => {
    cy.visit('http://localhost:8080')

    cy.contains('About').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/about.html')
  })
}) 
  
*/