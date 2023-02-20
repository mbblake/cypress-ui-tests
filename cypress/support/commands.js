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

// Login using a username and password
Cypress.Commands.add("login", { prevSubject: false }, (username, password) => {
    cy.visit("/");
    onLoginPage.logInWithCredentials(username, password);
    // Store the session cookie data as an environment variable.
    // We'll use it to stay logged in.
    cy.getCookies().then((cookies) => Cypress.env("cookies", cookies));
});

// Restore the session cookie from the cookie data stored
// in the "cookies" environment variable
Cypress.Commands.add("restoreCookies", { prevSubject: false }, (subject) => {
    const cookies = Cypress.env("cookies");
    cookies.forEach((cookie) => cy.setCookie(cookie.name, cookie.value));
});

// Take an array of elements and return a string array
// comprised of those elements' inner text
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

// Return true if the subject is an array in ascending order
Cypress.Commands.add("isAscendingOrder", { prevSubject: false }, (subject) => {
    return subject.every((v, i) => !i || v >= subject[i - 1]);
});
