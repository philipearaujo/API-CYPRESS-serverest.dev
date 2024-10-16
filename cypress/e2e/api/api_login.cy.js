/// <reference types="Cypress"/>

describe('API - Teste funcional de loguin' , () => {
    it('Deve realizar o loguin com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login ',
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
              }
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
        })
    });

    it('Deve validar senha incorreta', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login ',
            body: {
                "email": "fulano@qa.com",
                "password": "SenhaIncorreta"
              },
              failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(401)
            expect(response.body.message).to.equal('Email e/ou senha inválidos')
        })
    });

    it('Deve validar email incorreto', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login ',
            body: {
                "email": "email@errado.com",
                "password": "teste"
              },
              failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(401)
            expect(response.body.message).to.equal('Email e/ou senha inválidos')
        })
    });

});