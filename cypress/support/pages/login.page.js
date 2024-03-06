/// <reference types="cypress"/>

class LoginPage {
  get #email() {
    return cy.get('[data-testid="email"]');
  }
  get #password() {
    return cy.get('[data-testid="password"]');
  }
  get #btnLogin() {
    return cy.get('[data-testid="btnLogin"]');
  }

  login(usuario, senha) {
    this.#email.type(usuario);
    this.#password.type(senha);
    this.#btnLogin.click();
  }
}

module.exports = new LoginPage();
