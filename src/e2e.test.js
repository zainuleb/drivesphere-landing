import puppeteer from "puppeteer";
let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 30,
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  await page.waitForTimeout(2000);
}, 10000); // 10 seconds timeout

test("Home Page Loads Correctly", async () => {
  const sliderSubtitle = await page.$eval(
    ".bd-slider__subtitle",
    (el) => el.textContent
  );
  const sliderTitle = await page.$eval(
    ".bd-slider__title",
    (el) => el.textContent
  );
  const mainPara = await page.$eval(".mainPara", (el) => el.textContent);
  const btnText = await page.$eval(".bd-slider__btn", (el) => el.textContent);

  expect(sliderSubtitle).toBe("Confident Drivers");
  expect(sliderTitle).toContain(
    "Trained by Innovative, Data Driven Technologies"
  );
  expect(mainPara).toContain(
    "Get ready for your Driving License with our EU-approved driving simulator training program"
  );
  expect(btnText).toContain("Subscribe to get your first class for FREE");
});

afterAll(async () => {
  browser.close();
}, 10000); // 10 seconds timeout
