import { onInventoryPage } from "../support/page-objects/pages/inventoryPage";
import { loginData } from "../fixtures/users/standardUser";

describe("Cart Test Suite", () => {
    before(() => {
        cy.login(loginData.username, loginData.password);
    });

    beforeEach(() => {
        cy.restoreCookies();
        cy.visit("?/inventory.html");
    });

    it("Should remove one item from the shopping cart", function () {
        onInventoryPage
            .clickAddToCartFor("Sauce Labs Onesie")
            .and.inPageHeader.openShoppingCart()
            .removeFirstItemInCart()
            .and.theListOfItemsInCart.should("have.length", 0);
    });

    it("Should remove multiple items from the shopping cart", function () {
        onInventoryPage
            .clickAddToCartFor("Sauce Labs Onesie")
            .clickAddToCartFor("Sauce Labs Bike Light")
            .and.inPageHeader.openShoppingCart()
            .removeAllItemsInCart()
            .and.theListOfItemsInCart.should("have.length", 0);
    });
});
