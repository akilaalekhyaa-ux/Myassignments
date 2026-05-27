import {chromium,webkit,test} from "@playwright/test";
test ("Redbus", async() => {
//launching Chrome browser
const browser = await chromium.launch({channel: 'msedge'})
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://www.redbus.in")

const title = await page.title()
const URL = await page.url()

console.log(title)
console.log(URL)

});

//launching Webkit browser
test ("Flipkart", async() => {
//launching Chrome browser
const browser = await webkit.launch()
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://www.flipkart.com")

const title1 = await page.title()
const URL1 = await page.url()

console.log(title1)
console.log(URL1)
})