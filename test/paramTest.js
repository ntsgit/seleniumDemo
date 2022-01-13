const { Builder, Key, By } = require("selenium-webdriver");
//const {strictEqual} = require("assert");
let should = require("chai").should();

// describe block
describe("Add another todo tests", function () {

    browsers = ["chrome", "firefox"];

    browsers.forEach(browser => {
        console.log(browser);
        //it block
        it(`successfully add another todo to application ${browser}`, async function () {



            //launch the browser
            let driver = await new Builder().forBrowser(browser).build();

            //navigate to our application
            await driver.get("https://lambdatest.github.io/sample-todo-app/");

            //add a todo
            await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

            //assert
            let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
                return value
            });
            

            //assert using chai should
            todoText.should.equal("Learn Selenium");

            //close the browser
            await driver.quit();

        })


    })


});









