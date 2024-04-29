// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')  
    })

    // Exercício Extra 1

    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Teste, teste, teste teste, teste teste, teste teste, teste teste, teste teste, teste teste, teste teste, teste teste, teste teste, teste teste, teste teste, teste teste, teste teste, teste teste, teste teste, teste'
        cy.clock()
        cy.get('#firstName').type('Gabriel')
        cy.get('#lastName').type('Milito')
        cy.get('#email').type('gabriel.milito@example.com')
        cy.get('#open-text-area').type(longText, {delay:0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
        cy.tick(3000)
        cy.get('.success').should('not.be.visible')
    })

    // Exercício Extra 2

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.clock()
        cy.get('#firstName').type('Givanildo')
        cy.get('#lastName').type('Oliveira')
        cy.get('#email').type('givanildo@oliveira@.example.com')
        cy.get('#open-text-area').type('Vamo Galo, ganhar libertadores', {delay:0})
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
        cy.tick(3000)
        cy.get('.error').should('not.be.visible')
    })

    // Exercício Extra 3

    it('se um valor não-numérico for digitado em telefone, seu valor continuará vazio', function() {
        cy.get('#phone').type('abc').should('have.value', '')
    })

    // Exercício Extra 4

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.clock()
        cy.get('#firstName').type('Alexandre')
        cy.get('#lastName').type('Kalil')
        cy.get('#email').type('alexandre.kalil@example.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('GALO', {delay:0})
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
        cy.tick(3000)
        cy.get('.error').should('not.be.visible')
    })

    // Exercício Extra 5

    it('preenche e limpa os campos nome, sobrenome, email, telefone e como podemos te ajudar', function() {
        cy.get('#firstName').type('Sergio').should('have.value', 'Sergio').clear().should('have.value', '')
        cy.get('#lastName').type('Coelho').should('have.value', 'Coelho').clear().should('have.value', '')
        cy.get('#email').type('sergio.coelho@example.com').should('have.value', 'sergio.coelho@example.com').clear().should('have.value', '')
        cy.get('#phone').type('99999999999').should('have.value', '99999999999').clear().should('have.value','')
        cy.get('#open-text-area').type('GALO', {delay:0}).should('have.value', 'GALO').clear().should('have.value', '')        
    })

    // Exercício Extra 6

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.clock()
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
        cy.tick(3000)
        cy.get('.error').should('not.be.visible')
    })

    // Exercício Extra 7

    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.clock()
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
        cy.tick(3000)
        cy.get('.success').should('not.be.visible')
    })

    // Exercício Extra 8

    it('em vez de identificarmos tal elemento com o cy.get(), iremos usar o cy.contains()', function() {
        cy.clock()
        cy.contains('Nome').type('Alexandre')
        cy.contains('Sobrenome').type('Kalil')
        cy.contains('E-mail').type('alexandre.kalil@example.com')
        cy.get('#open-text-area').type('GALO', {delay:0})
        cy.contains('button', 'Enviar').click()

        cy.tick(3000)
        cy.get('.success').should('not.be.visible')
    })

    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.get('#product').select('YouTube').should('have.value', 'youtube')
    })

    // Exercício Extra 9

    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('#product').select('mentoria').should('have.value','mentoria')
    })

    // Exercício Extra 10

    it('seleciona um produto (Blog) por seu índice', function() {
        cy.get('#product').select(1).should('have.value','blog')
    })

    // Exercício da aula 4, seção 5

    it('marca o tipo de atendimento "Feedback"', function() {
        cy.get('input[type="radio"][value="feedback"]').check().should('have.value', 'feedback')
    })

    // Exercício Extra 11

    it('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]')
          .should('have.length', 3)
          .each(function($radio) {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
          })
    })

    // Exercício da aula 5, seção 6

    it('marca ambos checkboxes, depois desmarca o último', function() {
        cy.get('input[type="checkbox"]')
          .check()
          .should('be.checked')
          .last()
          .uncheck()
          .should('not.be.checked')
    })

    // Exercício Extra 12

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário - v2', function() {
        cy.clock()
        cy.get('#firstName').type('Elias')
        cy.get('#lastName').type('Kalil')
        cy.get('#email').type('elias.kalil@example.com')
        cy.get('#phone-checkbox').check().should('have.value', 'phone')
        cy.get('#open-text-area').type('GALO', {delay:0})
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
        cy.tick(3000)
        cy.get('.error').should('not.be.visible')
    })

    // Exercício da aula 6, seção 7

    it('seleciona um arquivo da pasta fixtures', function() {
        cy.get('input[type="file"]')
          .should('not.have.value')
          .selectFile('./cypress/fixtures/example.json')
          .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
          })
    })

    // Exercício Extra 14

    it('seleciona um arquivo simulando um drag-and-drop', function() {
        cy.get('input[type="file"]')
          .should('not.have.value')
          .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
          .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
          })
    })

    // Exercício Extra 15

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
        cy.fixture('example.json').as('exampleFile')
        cy.get('input[type="file"]')
          .should('not.have.value')
          .selectFile('@exampleFile')
          .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
          })
    })

    // Exercício da aula 7, seção 1

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
        cy.get('a[href="privacy.html"').should('have.attr', 'target','_blank')
    })

    // Exercício Extra 16

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
        cy.get('a[href="privacy.html"')
          .invoke('removeAttr', 'target')
          .click()
        
        cy.contains('Talking About Testing').should('be.visible')
    })

    // Exercício da aula 11, seção 12

    it('controle o relógio do navegador com os comandos cy.clock() e cy.tick()', function () {
        cy.clock()
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
        cy.tick(3000)
        cy.get('.success').should('not.be.visible')
    })

    // Exercício Extra 17

    Cypress._.times(5, function() {
        it('controle o relógio do navegador com os comandos cy.clock() e cy.tick()', function () {
            cy.clock()
            cy.fillMandatoryFieldsAndSubmit()
            cy.get('.success').should('be.visible')
            cy.tick(3000)
            cy.get('.success').should('not.be.visible')
        })
    })

    // Exercício Extra 18

    it('exibe e esconde as mensagens de sucesso e erro usando o .invoke()', function() {        
        cy.get('.success')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Mensagem enviada com sucesso.')
          .invoke('hide')
          .should('not.be.visible')
        
        cy.get('.error')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Valide os campos obrigatórios!')
          .invoke('hide')
          .should('not.be.visible')
    })

    // Exercício Extra 19

    it('preenche a area de texto usando o comando invoke', function() { 
        const longText = Cypress._.repeat('0123456789 ', 20)
        cy.get('#firstName').type('Diego')
        cy.get('#lastName').type('Tardelli')
        cy.get('#email').type('diego.tardelli@example.com')
        cy.get('#open-text-area').invoke('val', longText).should('have.value', longText)
    })

    // Exercício Extra 20

    it('faz uma requisição HTTP', function () {
        cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
          .should(function(response) {
            const {status, statusText, body} = response
            expect(status).to.equal(200);
            expect(statusText).to.equal('OK');
            expect(body).to.contains('CAC TAT')
        })
    })

    // Desafio (encontre o gato) 🐈

    it.only('encontra o gato escondido', function() {
        cy.get('#cat')
          .invoke('show')
          .should('be.visible')
        cy.get('#title')
          .invoke('text', 'CAT CAC')
        cy.get('#subtitle')
          .invoke('text', 'Eu sou indiferente a gatos!')
    })
})