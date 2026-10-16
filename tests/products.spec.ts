import { test, expect } from '../fixtures/base';


test.describe('Product', () => {
  
  test('home page lists products', { tag: '@smoke' }, async ({ homePage }) => {
    await expect(homePage.getByTestId('product-name')).toHaveCount(9);
  });

  test('sort products by name', async ({ homePage }) => {
    await homePage.getByTestId('sort').selectOption('Name (Z - A)');
    await expect(homePage.getByTestId('product-name').first()).toContainText('Wood Saw');
  });

});