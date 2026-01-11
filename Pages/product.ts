import { test,Page } from '@playwright/test';
export class ProductPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
    async decathlonProductFlow(product: string) {
  await this.page.goto('https://www.decathlon.in');
  await this.page.waitForLoadState('domcontentloaded');
  const titletext = await this.page.title();
  console.log(titletext);
  await this.page.getByText('Search for').first().click();
  await this.page.getByPlaceholder('Search').fill(product);
  await this.page.keyboard.press('Enter');

}
 async navigateToCart(sort: string,selectproduct:string,color:string,size:string) {
  await this.page.waitForLoadState();
  await this.page.getByText('Most Relevant').nth(0).click();
  await this.page.getByRole('link',{name:sort}).click();
  await this.page.getByRole('link', { name: selectproduct }).click();
  await this.page.getByAltText(color).click();
  await this.page.getByText(size, { exact: true }).click();
  await this.page.waitForTimeout(5000);
  await this.page.getByRole('button', { name: 'addToCart' }).nth(0).click();
}
 async goToCartPage() {
  await this.page.getByRole('link', { name: 'cart', exact: true }).click();
  await this.page.waitForLoadState('domcontentloaded');
  await this.page.screenshot({ path: 'decathloncart.png', fullPage: true }); 
  await this.page.waitForTimeout(5000);
}
}