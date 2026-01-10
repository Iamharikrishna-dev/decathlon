import { test, expect } from '@playwright/test';

test('Decathlon', async ({ page }) => {
  await page.goto('https://www.decathlon.in');
  await page.waitForLoadState('domcontentloaded');
  const titletext = await page.title();
  console.log(titletext);
  await page.getByText('Search for').first().click();
  await page.getByPlaceholder('Search').fill('Men Walking Shoes');
  await page.keyboard.press('Enter');
  await page.waitForLoadState('domcontentloaded');
  await page.getByText('Most Relevant').nth(0).click();
  await page.getByRole('link',{name:'Price: Low to High'}).click();
  await page.getByRole('link', { name: 'Men Walking Shoes with Breathable Mesh, Cushioning, PW 100 - Black MRP ₹' }).click();
  await page.getByAltText('Men Walking Shoes with Breathable Mesh, Cushioning, PW 100 - Blue').click();
  await page.getByText('8', { exact: true }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'addToCart' }).nth(0).click();
  await page.getByRole('link', { name: 'cart', exact: true }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.screenshot({ path: 'decathloncart.png', fullPage: true }); 
  await page.waitForTimeout(5000);

});