import { onInventoryPage } from "../support/page-objects/pages/inventoryPage";
import { loginData } from "../fixtures/users/standardUser";

describe("Inventory Test Suite", () => {
    before(() => {
        cy.login(loginData.username, loginData.password);
    });

    beforeEach(() => {
        cy.restoreCookies();
        cy.visit("?/inventory.html");
        cy.fixture("/products/productDetails").as("productDetails");
    });

    it("Should display all currently available products", function () {
        onInventoryPage.theListOfProductNames
            .asArrayOfInnerText()
            .each((productName) => {
                onInventoryPage
                    .theDescriptionForProduct(productName)
                    .should(
                        "contain",
                        this.productDetails[productName].description
                    );
                onInventoryPage
                    .thePriceForProduct(productName)
                    .should("contain", this.productDetails[productName].price);
            });
    });

    it("Should sort items by name from A to Z by default", () => {
        onInventoryPage.theListOfProductNames
            .asArrayOfInnerText()
            .then(cy.isAscendingOrder)
            .should("be.true");
    });
});
