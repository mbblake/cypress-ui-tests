import { onLoginPage } from "../support/page-objects/pages/loginPage";

describe("Login Test Suite", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Should log in successfully as standard user", () => {
        onLoginPage
            .logInWithCredentials("standard_user", "secret_sauce")
            .and.theUrl.should("contain", "/inventory.html");
    });

    it("Should not log in a locked out user", () => {
        onLoginPage
            .logInWithCredentials("locked_out_user", "secret_sauce")
            .and.theErrorMessage.should(
                "contain",
                "Epic sadface: Sorry, this user has been locked out."
            );
    });
});
