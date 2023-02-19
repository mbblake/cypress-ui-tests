import { onLoginPage } from "../support/page-objects/pages/loginPage";
import { loginData as standardUserLoginData } from "../fixtures/users/standardUser";
import { loginData as lockedOutUserLoginData } from "../fixtures/users/lockedOutUser";

describe("Login Test Suite", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Should log in successfully as standard user", () => {
        onLoginPage
            .logInWithCredentials(
                standardUserLoginData.username,
                standardUserLoginData.password
            )
            .and.theUrl.should("contain", "/inventory.html");
    });

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
