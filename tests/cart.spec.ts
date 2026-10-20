import { test, expect } from '../fixtures/base';

test('add a product to the cart', async ({ homePage, page }) => {
  await homePage.openProduct('Slip Joint Pliers');
  await page.getByTestId('add-to-cart').click();
  await expect(page.getByTestId('cart-quantity')).toHaveText('1');
});
