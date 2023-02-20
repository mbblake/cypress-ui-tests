import { onInventoryPage } from "../../support/page-objects/pages/inventoryPage";
import { loginData } from "../../fixtures/users/standardUser";

const productDetails = {};

describe("Fixture File Data Generators", () => {
    beforeEach(() => {
        cy.login(loginData.username, loginData.password);
    });

    describe("Products", () => {
        // Grab the product names, descriptions, and prices and write them to disk
        it("Should generate product details fixture file data", () => {
            onInventoryPage.theListOfProductNames
                .asArrayOfInnerText()
                .each((productName) => {
                    onInventoryPage
                        .theDescriptionForProduct(productName)
                        .then((description) => {
                            onInventoryPage
                                .thePriceForProduct(productName)
                                .then((price) => {
                                    productDetails[productName] = {
                                        description: description.text(),
                                        price: price.text(),
                                    };
                                });
                        });
                });

            cy.writeFile(
                "cypress/fixtures/products/productDetails.json",
                productDetails
            );
        });
    });
});
