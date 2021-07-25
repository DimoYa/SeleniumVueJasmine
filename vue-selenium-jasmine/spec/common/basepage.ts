require('chromedriver');
const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome');

export const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build()


driver 
    .manage()
    .window()
    .maximize();

export const waitForElement = async (locator) => {
    return driver.findElement(async () => {
        await driver.wait(webdriver.until.elementLocated(locator));
        return driver.findElement(locator);
    });
};