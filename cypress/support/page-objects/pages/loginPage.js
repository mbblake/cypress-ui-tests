import { InventoryPage } from "./inventoryPage";
import { BasePage } from "../base/basePage";

export class LoginPage extends BasePage {
    get theUsernameField() {
        return cy.get("#user-name");
    }

    get thePasswordField() {
        return cy.get("#password");
    }

    get theLoginButton() {
        return cy.get("#login-button");
    }

    get theErrorMessage() {
        return cy.get(".error-message-container");
    }

    clickLoginButton() {
        this.theLoginButton.click();

        return this;
    }

    logInWithCredentials(username, password) {
        this.theUsernameField.type(username);
        this.thePasswordField.type(password);
        this.clickLoginButton();

        return this;
    }
}

export const onLoginPage = new LoginPage();
