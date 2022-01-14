const { Builder, Key, By } = require("selenium-webdriver");
let expect = require("chai").expect;
let should = require("chai").should();

const webAddress = 'https://www.saucedemo.com/'

// describe block
describe("Login to application", async function () {

    beforeEach(async () => {
    })

    afterEach(async () => {
    })

    it(`login to application for valid user`, async function () {
        const driver = await new Builder().forBrowser("firefox").build();
        try {
            //navigate to our application
            await driver.get(webAddress);
            user = 'standard_user';//, "problem_user", "performance_glitch_user"
            password = 'secret_sauce';
            //enter user name
            await driver.findElement(By.id("user-name")).sendKeys(user);
            //enter password
            await driver.findElement(By.id("password")).sendKeys(password);
            //click login button
            await driver.findElement(By.id("login-button")).sendKeys(Key.RETURN);
            //verify login via assertions
            const currentAddress = await driver.getCurrentUrl();
            currentAddress.should.not.equal(`${webAddress}`);
            const currentAddressLength = currentAddress.length;
            expect(currentAddressLength).to.not.be.equal(webAddress.length);
            // valid user must have shopping cart
            const loginButton = await driver.findElement(By.id("login-button"))
        } catch (error) {
            console.error(error);
        } finally {
            await driver.quit();
        }
    });

    it(`login to application for invalid user`, async function () {
        const driver = await new Builder().forBrowser("firefox").build();
        //navigate to our application
        await driver.get(webAddress);
        user = 'locked_out_user';//, "problem_user", "performance_glitch_user"
        password = 'secret_sauce';
        //enter user name
        await driver.findElement(By.id("user-name")).sendKeys(user);
        //enter password
        await driver.findElement(By.id("password")).sendKeys(password);
        //click login button
        await driver.findElement(By.id("login-button")).sendKeys(Key.RETURN);
        //verify login via assertions
        const currentAddress = await driver.getCurrentUrl();
        currentAddress.should.equal(`${webAddress}`);
        const currentAddressLength = currentAddress.length;
        expect(currentAddressLength).to.be.equal(webAddress.length);
        // invalid user must have login button
        await driver.quit();
    });



});
