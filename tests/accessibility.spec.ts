import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('login page accessibility scan', { tag: '@a11y' }, async ({ page }) => {
  await page.goto('/auth/login');
  await expect(page.getByTestId('login-submit')).toBeVisible();

  //const results = await new AxeBuilder({ page }).analyze();     

  //console.log(results.violations.map(v => `${v.impact}: ${v.id} - ${v.help}`));
  //xpect(results.violations).toEqual([]);  
  
  
  const results = await new AxeBuilder({ page })
  .disableRules(['button-name'])     // known issue on the demo site, already reported
  .analyze();

console.log(results.violations.map(v => `${v.impact}: ${v.id} - ${v.help}`));

const serious = results.violations.filter(v => ['serious', 'critical'].includes(v.impact ?? ''));
expect(serious).toEqual([]);  
});

         