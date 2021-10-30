import { Given, When, Then } from "@cucumber/cucumber";
import faker from "faker";
import homePage from "../pageobjects/home.page";
import registerPage from "../pageobjects/register.page";
const randomStr = Math.random().toString(36).substr(2, 5);
const email = `myEmail_${randomStr}@gmail.com`;

Given(/^I am on the home page$/, async () => {
  await browser.url("http://automationpractice.com/index.php");
  browser.maximizeWindow();
  expect(await browser.getTitle()).toEqual("My Store");
});

When(/^Navigate to SignUp Page and Create New user$/, async () => {
  await homePage.navigateToLoginPage();
  const addressObj = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  };
  await registerPage.createAccount(email, addressObj);
  let name = await $('[title="View my customer account"]').getText();
  expect(name).toEqual(addressObj.firstName + " " + addressObj.lastName);
});

Then(/^Logout and login again with created new user$/, async () => {
  await homePage.signOut();
  await homePage.navigateToLoginPage();
  await registerPage.login_UserAccount(email);
});
