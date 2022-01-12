const {Builder, Key, By} = require("selenium-webdriver");
const {strictEqual} = require("assert");
let should = require("chai").should();

async function example(){
//launch the browser
let driver = await new Builder().forBrowser("firefox").build();

//navigate to our application
await driver.get("https://lambdatest.github.io/sample-todo-app/");

//add a todo
await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

//assert
let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
    return value
});
console.log(typeof todoText);

//assert using node assertion
strictEqual(todoText, "Learn Selenium");
//assert using chai should
todoText.should.equal("Learn Selenium");

//close the browser
await driver.quit();

}

example();

