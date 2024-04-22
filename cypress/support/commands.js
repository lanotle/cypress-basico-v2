Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Alexandre')
    cy.get('#lastName').type('Kalil')
    cy.get('#email').type('alexandre.kalil@example.com')
    // cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('GALO', {delay:0})
    cy.get('button[type="submit"]').click()
})