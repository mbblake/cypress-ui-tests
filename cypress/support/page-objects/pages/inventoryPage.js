import { BasePage } from "../base/basePage";
import { PageHeader } from "../components/pageHeader";

export class InventoryPage extends BasePage {
    get inPageHeader() {
        return new PageHeader();
    }

    // Includes the product name, description, price, and add to cart button
    get theListOfProductDetails() {
        return cy.get(".inventory_item_description");
    }

    // A list of only the product names e.g. "Sauce Labs Backpack"
    get theListOfProductNames() {
        return cy.get(".inventory_item_name");
    }

    // The product details for the product with the specified name
    theDetailsForProduct(productName) {
        return this.theListOfProductDetails.contains(
            ".inventory_item_description",
            productName
        );
    }

    // The description for the product with the specified name
    theDescriptionForProduct(productName) {
        return this.theDetailsForProduct(productName).find(
            ".inventory_item_desc"
        );
    }

    // The price for the product with the specified name
    thePriceForProduct(productName) {
        return this.theDetailsForProduct(productName).find(
            ".inventory_item_price"
        );
    }

    // The add to cart button for the product with the specified name
    theAddToCartButtonFor(productName) {
        return this.theDetailsForProduct(productName).find(
            "button.btn_primary.btn_inventory"
        );
    }

    clickAddToCartFor(productName) {
        this.theAddToCartButtonFor(productName).click();

        return this;
    }
}

export const onInventoryPage = new InventoryPage();
