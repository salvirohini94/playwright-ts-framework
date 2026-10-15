import { test, expect } from '@playwright/test';

test('add a product to the cart', async ({ page }) => {
  await page.goto('/');

  await page.getByText('Slip Joint Pliers').click();       

  await page.getByTestId('add-to-cart').click();                       
  await expect(page.getByTestId('cart-quantity')).toHaveText('1');
});