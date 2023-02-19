import { onInventoryPage } from "../support/page-objects/pages/inventoryPage";
import { onLoginPage } from "../support/page-objects/pages/loginPage";

describe("Inventory Test Suite", () => {
    before(() => {
        cy.login("standard_user", "secret_sauce");
    });

    beforeEach(() => {
        cy.restoreCookies();
        cy.visit("?/inventory.html");
        cy.fixture("products").as("products");
    });

    it("Should display all currently available products", function () {
        onInventoryPage.theListOfProductNames
            .asArrayOfInnerText()
            .each((productName) => {
                onInventoryPage
                    .theDescriptionForProduct(productName)
                    .should("contain", this.products[productName].description);
                onInventoryPage
                    .thePriceForProduct(productName)
                    .should("contain", this.products[productName].price);
            });
    });

    it("Should sort items by name from A to Z by default", () => {
        onInventoryPage.theListOfProductNames
            .asArrayOfInnerText()
            .then(cy.isAscendingOrder)
            .should("be.true");
    });
});
