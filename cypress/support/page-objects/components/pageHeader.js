import { BaseInteractable } from "../base/baseInteractable";
import { BurgerMenu } from "./burgerMenu";
import { ShoppingCartPage } from "../pages/shoppingCartPage";

export class PageHeader extends BaseInteractable {
    get theBurgerMenuButton() {
        return cy.get("#react-burger-menu-btn");
    }

    get theShoppingCartButton() {
        return cy.get("#shopping_cart_container");
    }

    // Return the count as an integer
    get theNumberOfProductsInCart() {
        return cy.get(".shopping_cart_badge").then((number) => {
            cy.wrap(parseInt(number.text()));
        });
    }

    openBurgerMenu() {
        this.theBurgerMenuButton.click();

        return new BurgerMenu();
    }

    openShoppingCart() {
        this.theShoppingCartButton.click();

        return new ShoppingCartPage();
    }
}

export const inPageHeader = new PageHeader();
