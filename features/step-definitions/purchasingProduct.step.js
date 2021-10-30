import { Given, When, Then } from "@cucumber/cucumber";
import productPurchasing from "../pageobjects/productPurchasing.page";
import homePage from "../pageobjects/home.page";

Given(/^I am on the Home page$/, async () => {
  expect(await homePage.getLogo()).toBePresent();
});

When(/^I Select a product and Added to the cart$/, async () => {
  await productPurchasing.clickMenu_Women();
  await productPurchasing.selectProduct();
  await productPurchasing.clickAddToCartButton();
});

Then(
  /^I Proceed to the checkout page and continue till payment and Confirm Order$/,
  async () => {
    await productPurchasing.clickProceedToCheckOutButton();
    await productPurchasing.clickCheckoutButton_Summery();
    await productPurchasing.clickCheckoutButton_Address();
    await productPurchasing.clickTermsOfServices_CheckBox();
    await productPurchasing.clickCheckoutButton_Shipping();
    expect(await productPurchasing.productName.getText()).toEqual("Blouse");
    expect(await productPurchasing.productReference.getText()).toEqual(
      "SKU : demo_2"
    );
    expect(await productPurchasing.productColorAndSize.getText()).toEqual(
      "Color : Black, Size : S"
    );
    await productPurchasing.payByCheck.click();
    expect(await productPurchasing.checkPayment.getText()).toEqual(
      "CHECK PAYMENT"
    );
    await productPurchasing.clickConfirmMyOrderButton();
    expect(await productPurchasing.orderSucessMessage.getText()).toEqual(
      "Your order on My Store is complete."
    );
  }
);
