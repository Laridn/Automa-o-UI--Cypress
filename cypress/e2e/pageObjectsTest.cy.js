/// <reference types="cypress"/>

const { homePage } = require('../support/pages/home.page');
const loginPage = require('../support/pages/login.page');
const { usuario, senha } = require('../fixtures/data.json');
const { profilePage } = require('../support/pages/profile.page');

describe('Teste de Autenticação', () => {
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', {
      domain: 'lojaebac.ebaconline.art.br',
    });
    cy.visit('/');
  });
  it('deve fazer o login com sucesso', () => {
    homePage.openMenu('Account');
    loginPage.login(usuario, senha);
    homePage.openMenu('Account');
    profilePage.customerName().should('have.text', 'EBAC Cliente');
  });
});
