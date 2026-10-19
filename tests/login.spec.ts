import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login using the page object', async ({ page }) => {
  const loginPage = new LoginPage(page);                  
  await loginPage.goto();
  await loginPage.login('narayanerohini@gmail.com', 'Rohini_narayane123');
  await expect(page).toHaveURL(/account/);
});