import { test, expect } from '@playwright/test';

test('add a product to the cart', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.getByTestId('product-name').first().click();       

  await page.getByTestId('add-to-cart').click();                       // hint: the Add to cart button, then the action

  await expect(page.getByTestId('cart-quantity')).toHaveText('1');            // hint: the small number badge on the cart icon, then an exact-text check
});