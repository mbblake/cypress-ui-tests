import { onLoginPage } from "../support/page-objects/pages/loginPage";
import { loginData as standardUserLoginData } from "../fixtures/users/standardUser";
import { loginData as lockedOutUserLoginData } from "../fixtures/users/lockedOutUser";
import { tags } from "../support/utilities/tags";
import { TAG } from "../fixtures/tags/tagConstants";

const testEnv = Cypress.env("TEST_ENV").toLowerCase();

describe(`Login Test Suite [${testEnv}]`, () => {
    beforeEach(() => {
        cy.visit("/");
    });

    tags([TAG.LOGIN, TAG.SMOKE], () => {
        it("Should log in successfully as standard user", () => {
            onLoginPage
                .logInWithCredentials(
                    standardUserLoginData.username,
                    standardUserLoginData.password
                )
                .and.theUrl.should("contain", "/inventory.html");
        });
    });

    tags([TAG.LOGIN, TAG.SMOKE], () => {
        it("Should not log in a locked out user", () => {
            onLoginPage
                .logInWithCredentials(
                    lockedOutUserLoginData.username,
                    lockedOutUserLoginData.password
                )
                .and.theErrorMessage.should(
                    "contain",
                    "Epic sadface: Sorry, this user has been locked out."
                );
        });
    });
});
