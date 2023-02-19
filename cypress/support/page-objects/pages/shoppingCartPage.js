import { BasePage } from "../base/basePage";

export class ShoppingCartPage extends BasePage {
    get theListOfItemsInCart() {
        return cy.get(".cart_item");
    }

    get theRemoveButtons() {
        return cy.get("button").contains("Remove");
    }

    removeFirstItemInCart() {
        this.theRemoveButtons.first().click();

        return this;
    }

    removeAllItemsInCart() {
        this.theListOfItemsInCart.each(() => {
            this.removeFirstItemInCart();
        });
        return this;
    }
}
