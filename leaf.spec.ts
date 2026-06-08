import test from '@playwright/test';

test('Handle child window and return to parent', async ({ page }) => {

// Load the URL
await page.goto('https://www.leafground.com/window.xhtml');

// Handle the child window
const [childPage] = await Promise.all([
page.waitForEvent('popup'), // Wait for new window
page.locator('//span[text()="Open"]').click()
]);

// Wait for child page to load
await childPage.waitForTimeout(2000);

// Enter Mail ID in child page
await childPage.locator("input[id*='email']").fill('akilaalekhya@gmail.com');

console.log('Mail ID entered in child window');

// Switch back to parent page (child remains open)
await page.bringToFront();
// Click Open Multiple button on parent page
await page.locator('//span[text()="Open Multiple"]').click();

console.log('Clicked Open Multiple button');
});
