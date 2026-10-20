import { test as base, expect, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { user } from '../test-data/user';

export const test = base.extend<{ loggedInPage: Page; homePage: HomePage; loginPage: LoginPage }>({
  loggedInPage: async ({ page }, use) => {
    await page.goto('/auth/login');
    await page.getByTestId('email').fill(user.email);      
    await page.getByTestId('password').fill(user.password);
    await page.getByTestId('login-submit').click();
    await expect(page).toHaveURL(/account/);
    await use(page);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);        
    await homePage.goto();
    await use(homePage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage (page);            
    await loginPage.goto();
    await use(loginPage);
  },
});

export { expect };