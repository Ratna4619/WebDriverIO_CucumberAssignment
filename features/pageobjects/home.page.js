class HomePage {
  //WebElement Locators
  get btnSignIn() {
    return $(".login");
  }

  get imgLogo() {
    return $(".logo.img-responsive");
  }

  get btn_SignOut() {
    return $('[title="Log me out"]');
  }

  // Actions
  async navigateToLoginPage() {
    await this.btnSignIn.click();
  }

  async signOut() {
    await this.btn_SignOut.click();
  }

  async getLogo() {
    return await this.imgLogo;
  }
}

export default new HomePage();
