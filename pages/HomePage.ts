import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly sortDropdown: Locator;
  readonly productNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByTestId('search-query');
    this.sortDropdown = page.getByTestId('sort'); 
    this.productNames = page.getByTestId('product-name');
  }

  async goto() {
    await this.page.goto('/');
    await this.productNames.first().waitFor();        
  }

  async search(term: string) {
    await this.searchBox.fill(term);
    await this.searchBox.press('Enter');               
  }

  async sortBy(option: string) {
    await this.sortDropdown.selectOption(option);              
  }
  async openProduct(name: string) {
  await this.page.getByText(name).click();      // hint: the locator that finds an element by its visible words
}
}