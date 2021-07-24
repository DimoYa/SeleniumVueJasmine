import { HomePage } from "../page-objects/homepage.po";
import { driver } from "../common/basepage";

describe('HomePage', () => {

  let page;

  beforeEach(async () => {
    page = new HomePage;
  });

  it('should display welcome message', async () => {
    await page.navigateTo('/');
    expect(await page.getPageHeadingText()).toEqual('Welcome to Your Vue.js App');
  });

  afterEach(async () => {
    driver.quit();
  });
});
