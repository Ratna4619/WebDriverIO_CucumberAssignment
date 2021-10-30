class ProductPurchasing {
  // WebElements :-
  get btn_WomenMenu() {
    return $('a[title="Women"]');
  }

  get productItem() {
    return $('h5>a[title="Blouse"]');
  }

  get btn_AddToCart() {
    return $("#add_to_cart");
  }

  get btn_ProceedToCheckOut() {
    return $('[title="Proceed to checkout"]');
  }

  get btn_ProceedToCheckOut_SummerySection() {
    return $('p>[title="Proceed to checkout"]');
  }

  get btn_ProceedToCheckOut_AddressSection() {
    return $('[name="processAddress"]');
  }

  get checkBox_TermsOfServices() {
    return $('[type="checkbox"]');
  }

  get btn_ProceedToCheckOut_ShippingSection() {
    return $('[name="processCarrier"]');
  }

  get productName() {
    return $("td>p.product-name");
  }

  get productReference() {
    return $("small.cart_ref");
  }

  get productColorAndSize() {
    return $("td>small>a");
  }

  get payByCheck() {
    return $('[title="Pay by check."]');
  }

  get checkPayment() {
    return $("h3.page-subheading");
  }

  get btn_confirmMyOrder() {
    return $('p>[type="submit"]');
  }

  get orderSucessMessage() {
    return $(".alert.alert-success");
  }

  // Actions :-

  async clickMenu_Women() {
    await this.btn_WomenMenu.click();
  }

  async selectProduct() {
    await this.productItem.waitForExist({ timeout: 3000 });
    await this.productItem.click();
  }

  async clickAddToCartButton() {
    await this.btn_AddToCart.click();
    await browser.pause(5000);
  }

  async clickProceedToCheckOutButton() {
    await this.btn_ProceedToCheckOut.waitForExist({ timeout: 3000 });
    await this.btn_ProceedToCheckOut.click();
  }

  async clickCheckoutButton_Summery() {
    await this.btn_ProceedToCheckOut_SummerySection.click();
  }

  async clickCheckoutButton_Address() {
    await this.btn_ProceedToCheckOut_AddressSection.click();
  }

  async clickTermsOfServices_CheckBox() {
    await this.checkBox_TermsOfServices.click();
  }

  async clickCheckoutButton_Shipping() {
    await this.btn_ProceedToCheckOut_ShippingSection.click();
  }

  async clickConfirmMyOrderButton() {
    await this.btn_confirmMyOrder.click();
  }
}

export default new ProductPurchasing();
