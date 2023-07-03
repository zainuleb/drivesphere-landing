import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("navigates to the MainPage", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".bd-slider__subtitle"); // Make sure MainPage has loaded
    const text = await page.$eval(".bd-slider__subtitle", (e) => e.textContent);
    expect(text).toContain("Confident Drivers");
  });
  afterAll(() => browser.close());
});
