import { Selector } from "testcafe";
var faker = require('faker');
const firstName = faker.name.findName();
const lastName = faker.name.lastName();
const dateOfBirthDropdown = Selector('[name="DateOfBirthDay"]')
const dateOfBirthDropdownOption = dateOfBirthDropdown.find('option')
const dateOfBirthMonth = Selector('[name="DateOfBirthMonth"]')
const dateOfBirthMonthDropdownOption = dateOfBirthMonth.find('option')
const dateOfBirthYear = Selector('[name="DateOfBirthYear"]')
const dateOfBirthYearDropdownOption = dateOfBirthYear.find('option')

fixture("My Fixture")
    .page("https://demo.nopcommerce.com/")
    .beforeEach(async t=> {
    await t
        .click("[href='/']")
    });

    test("UserRegistration", async t=>{
        await t
            .click(".ico-register")
            .click("#gender-male")
            .typeText("#FirstName",firstName)
            .typeText("#LastName",lastName)
            .click(dateOfBirthDropdown)
            .click(dateOfBirthDropdownOption.withText('2'))
            .click(dateOfBirthMonth)
            .click(dateOfBirthMonthDropdownOption.withText('February'))
            .click(dateOfBirthYear)
            .click(dateOfBirthYearDropdownOption.withText('1965'))
            .debug()
            .typeText('#Email',faker.internet.email())
            .typeText('#Company', faker.company.companyName())
            .typeText('#Password','abc123')
            .typeText('#ConfirmPassword','abc123')
            .takeScreenshot();
    })

    test("Log in", async t=>{
        await t
            .click(".ico-login")
            .typeText("#Email",faker.internet.email())
            .typeText("#Password",lastName)
            .click('#RememberMe')
            .click("div >button[type='submit']")
            .takeScreenshot();
    })

    test("Product Search", async t=>{
        await t
            .typeText("#small-searchterms", "Apple MacBook Pro 13-inch")
            .pressKey('enter')
            .takeScreenshot();
    })