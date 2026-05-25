import test, { chromium, firefox, webkit } from "@playwright/test";
test("Page Fixture",  async({page})=> {

    await page.goto("https://www.facebook.com")
    
})