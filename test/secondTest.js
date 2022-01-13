const { Builder, Key, By } = require("selenium-webdriver");
//const {strictEqual} = require("assert");
const ltCapabilities = require("../capabilities");
let should = require("chai").should();

// describe block
describe("Add another todo tests", function () {


    beforeEach(function () {

        //executed before each of it block
    });

    afterEach(function(){
        //executed after each it block i.e clean up scenarios after each test
    });


    //it block
    it("successfully add another todo to application", async function () {
        //launch the browser
        let driver = await new Builder().forBrowser("firefox").build();

        //navigate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //add a todo
        await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

        //assert
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
            return value
        });
        console.log(typeof todoText);

        //assert using node assertion
        //strictEqual(todoText, "Learn Selenium");

        //assert using chai should
        todoText.should.equal("Learn Selenium");

        //close the browser
        await driver.quit();

    })

    it("adding a new test for reporting", async function () {
        //launch the browser
        let driver = await new Builder().forBrowser("firefox").build();

        //navigate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //add a todo
        await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

        //assert
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
            return value
        });
        console.log(typeof todoText);

        //assert using node assertion
        //strictEqual(todoText, "Learn Selenium");

        //assert using chai should
        todoText.should.equal("Learn Selenium");

        //close the browser
        await driver.quit();

    })

});









