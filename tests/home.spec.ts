import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('search shows a matching product', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.search('hammer');
  await expect(homePage.productNames.first()).toContainText('Hammer');
});

test('sort products Z to A', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.sortBy('Name (Z - A)');
  await expect(homePage.productNames.first()).toContainText('Wood Saw');
});