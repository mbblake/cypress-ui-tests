import { BaseInteractable } from "./baseInteractable";

export class BasePage extends BaseInteractable {
    get theUrl() {
        return cy.url();
    }

    get thePageTitle() {
        return cy.title();
    }
}
