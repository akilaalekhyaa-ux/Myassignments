import test from "@playwright/test"
test ("Create Lead", async({page}) =>{
await page.goto(" https://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("democsr")
await page.locator("[name='PASSWORD']").fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator(`text='CRM/SFA'`).click()
await page.locator(`text='Leads'`).click() 
await page.locator(`text='Create Lead'`).first().click()
await page.locator("#createLeadForm_companyName").fill("TestLeaf") //id locator type is used here, we can use [id='createLeadForm_companyName'] also
await page.locator("#createLeadForm_firstName").fill("Raks")
await page.locator("#createLeadForm_lastName").fill("Kumar")
await page.locator("#createLeadForm_personalTitle").fill("Mrs.")
await page.locator("#createLeadForm_generalProfTitle").fill("Automation Tester")
await page.locator("#createLeadForm_annualRevenue").fill("1000000")
await page.locator("#createLeadForm_departmentName").fill("QA")
await page.locator("#createLeadForm_primaryPhoneNumber").fill("9999999999")
await page.locator(".smallSubmit").click() //class locator type is used here, we can use [class='smallSubmit'] also
})