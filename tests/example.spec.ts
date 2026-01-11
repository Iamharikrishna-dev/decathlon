import { test, expect } from '@playwright/test';
import { ProductPage } from '../Pages/product';

test('Decathlon', async ({ page }) => {
  const pp = new ProductPage(page);
  await pp.decathlonProductFlow('Men Walking Shoes');
  await pp.navigateToCart('Price: Low to High','Men Walking Shoes with Breathable Mesh, Cushioning, PW 100 - Black MRP ₹','Men Walking Shoes with Breathable Mesh, Cushioning, PW 100 - Blue','8');
  await pp.goToCartPage();

});