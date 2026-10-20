import { test, expect } from '../fixtures/base';

test('practice site opens', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Practice Software Test/);
});

test('open the sign in page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Your email').fill('test@example.com');
  await expect(page).toHaveURL(/auth\/login/);
});

test('home page lists products', { tag: '@smoke' }, async ({ homePage }) => {
  await expect(homePage.productNames).toHaveCount(9);
});

test('search shows a matching product', async ({ homePage }) => {
  await homePage.search('hammer');
  await expect(homePage.productNames.first()).toContainText('Hammer');
});

test('sort products Z to A', async ({ homePage }) => {
  await homePage.sortBy('Name (Z - A)');
  await expect(homePage.productNames.first()).toContainText('Wood Saw');
});