import { BasePage } from "../base/basePage";
import { PageHeader } from "../components/pageHeader";

export class InventoryPage extends BasePage {
    get inPageHeader() {
        return new PageHeader();
    }

    get theListOfProductDetails() {
        return cy.get(".inventory_item_description");
    }

    get theListOfProductNames() {
        return cy.get(".inventory_item_name");
    }

    theDetailsForProduct(productName) {
        return this.theListOfProductDetails.contains(
            ".inventory_item_description",
            productName
        );
    }

    theDescriptionForProduct(productName) {
        return this.theDetailsForProduct(productName).find(
            ".inventory_item_desc"
        );
    }

    thePriceForProduct(productName) {
        return this.theDetailsForProduct(productName).find(
            ".inventory_item_price"
        );
    }

    theAddToCartButtonFor(productName) {
        return this.theDetailsForProduct(productName).find(
            "button.btn_inventory"
        );
    }

    clickAddToCartFor(productName) {
        this.theAddToCartButtonFor(productName).click();

        return this;
    }
}

export const onInventoryPage = new InventoryPage();
