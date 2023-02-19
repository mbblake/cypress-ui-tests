// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { onLoginPage } from "./page-objects/pages/loginPage";

Cypress.Commands.add("login", { prevSubject: false }, (username, password) => {
    cy.visit("/");
    onLoginPage.logInWithCredentials(username, password);
    cy.getCookies().then((cookies) => Cypress.env("cookies", cookies));
});

Cypress.Commands.add("restoreCookies", { prevSubject: false }, (subject) => {
    const cookies = Cypress.env("cookies");
    cookies.forEach((cookie) => cy.setCookie(cookie.name, cookie.value));
});

Cypress.Commands.add(
    "asArrayOfInnerText",
    { prevSubject: "element" },
    (subject) => {
        cy.wrap(subject).then((elements) => {
            const elementsText = elements
                .toArray()
                .map((element) => element.innerText.trim());
            return elementsText;
        });
    }
);

Cypress.Commands.add("isAscendingOrder", { prevSubject: false }, (subject) => {
    return subject.every((v, i) => !i || v >= subject[i - 1]);
});
