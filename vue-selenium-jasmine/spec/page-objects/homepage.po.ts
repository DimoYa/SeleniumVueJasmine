import { driver, waitForElement } from "../common/basepage";
import { By } from 'selenium-webdriver';
import { baseurl } from "../selenium.config.json";

export class HomePage {

  async navigateTo(path) {
    return driver.get(`${baseurl}/${path}`);
  }

  async getPageHeadingText() {
    return (await waitForElement(By.xpath('//h1'))).getText();
  }
}