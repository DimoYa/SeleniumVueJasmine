const { HomePage } = require("../page-objects/homepage.po.ts");
const { driver } = require ("../common/basepage.ts");

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
