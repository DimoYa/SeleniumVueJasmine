require('chromedriver');
import chrome from 'selenium-webdriver/chrome';
import { Builder, until } from 'selenium-webdriver';

export const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build()

driver
    .manage()
    .window()
    .maximize();

export const waitForElement = async (locator) => {
    return driver.findElement(async () => {
        await driver.wait(until.elementLocated(locator));
        return driver.findElement(locator);
    });
};