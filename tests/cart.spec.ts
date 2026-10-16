import { test, expect } from '../fixtures/base';

test('add a product to the cart', async ({ homePage }) => {
  await homePage.goto('/');
  await homePage.getByText('Slip Joint Pliers').click();       

  await homePage.getByTestId('add-to-cart').click();                       
  await expect(homePage.getByTestId('cart-quantity')).toHaveText('1');
});