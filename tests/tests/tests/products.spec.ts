import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');         
});

test('home page lists products', async ({ page }) => {
  await expect(page.getByTestId('product-name')).toHaveCount(9);
});

test('sort products by name', async ({ page }) => {
  await page.getByTestId('sort').selectOption('Name (Z - A)');
  await expect(page.getByTestId('product-name').first()).toContainText('Wood Saw');
});