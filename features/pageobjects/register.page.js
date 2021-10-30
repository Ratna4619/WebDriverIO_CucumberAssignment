class RegisterPage {
  // WebElements
  get input_CreateAccountEmail() {
    return $("#email_create");
  }

  get btn_CreateAccount() {
    return $("#SubmitCreate");
  }

  get radio_Gender() {
    return $("#id_gender1");
  }

  get input_FirstName() {
    return $("#customer_firstname");
  }

  get input_lastName() {
    return $("#customer_lastname");
  }

  get input_Email() {
    return $("#email");
  }

  get input_Password() {
    return $("#passwd");
  }

  get input_AddressFirstName() {
    return $("#firstname");
  }

  get input_AddressLastName() {
    return $("#lastname");
  }

  get input_Address_Address1() {
    return $("#address1");
  }

  get input_AddressCity() {
    return $("#city");
  }

  get input_AddressState() {
    return $("#id_state");
  }

  get input_AddressPostalCode() {
    return $("#postcode");
  }

  get input_AddressCountry() {
    return $("#id_country");
  }

  get input_AddressMobile() {
    return $("#phone_mobile");
  }

  get input_AddressAlias() {
    return $("#alias");
  }

  get btn_Submit() {
    return $("#submitAccount");
  }

  // Login Section
  get input_LoginEmail() {
    return $("#email");
  }
  get input_LoginPassword() {
    return $("#passwd");
  }
  get btn_SubmitLogin() {
    return $("#SubmitLogin");
  }

  // Actions
  async createAccount(email, address) {
    await this.input_CreateAccountEmail.waitForExist({ timeout: 1000 });
    await this.input_CreateAccountEmail.setValue(email);
    await this.btn_CreateAccount.click();

    await this.radio_Gender.click();
    await this.input_FirstName.setValue(address.firstName);
    await this.input_lastName.setValue(address.lastName);
    await this.input_Email.setValue(email);
    await this.input_Password.setValue("Password@12345");
    await this.input_AddressFirstName.setValue(address.firstName);
    await this.input_AddressLastName.setValue(address.lastName);
    await this.input_Address_Address1.setValue("Street 123");
    await this.input_AddressCity.setValue("Hyderabad");
    await this.input_AddressState.selectByIndex(2);
    await this.input_AddressPostalCode.setValue("00001");
    await this.input_AddressMobile.setValue("+65 49960123");
    await this.input_AddressAlias.setValue("Home Address Home");
    await this.btn_Submit.click();
    await browser.pause(1000);
  }

  async login_UserAccount(email) {
    await this.input_LoginEmail.setValue(email);
    await this.input_LoginPassword.setValue("Password@12345");
    await this.btn_SubmitLogin.click();
    await browser.pause(2000);
  }
}

export default new RegisterPage();
