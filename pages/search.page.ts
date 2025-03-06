import { Page, expect } from '@playwright/test';
import { MainLocators } from '../locators/main.locators';
import { BasePage } from './basePage.page';
import { randomUtils } from '../helpers/randomUtils';

export class SearchPage extends BasePage {

    page1: Page;

  /**
   * @param searchQuery 
   */
  async searchProduct(searchQuery: string): Promise<any> {
    await this.page.fill(MainLocators.SEARCHBOX, searchQuery);
    await this.page.click(MainLocators.SEARCHBUTTON);
  }

  async getProductTitle(): Promise<string> {
    await this.page1.waitForTimeout(1000);
    const brandName = this.page1.locator(MainLocators.PRODUCTTITLE+'/a').innerText();
    const productName = this.page1.locator(MainLocators.PRODUCTTITLE+'/span').innerText();
    const productTitle = (await brandName).toString() + (await productName).toString();
    return productTitle;
  }

  async getProductPrice(): Promise<string> {
    await this.page1.waitForTimeout(1000);
    const productPrice = this.page1.locator(MainLocators.PRODUCTPRICE).innerText();
    return productPrice;
  }

  async getBasketProductPrice(): Promise<string> {
    const basketProducTitle = await this.page1.locator(MainLocators.ITEMPRICE).innerText();
    return basketProducTitle;
  }
  async getBasketProductTitle(): Promise<string> {
    const basketProducTitle = await this.page1.locator(MainLocators.ITEMTITLE).innerText();
    return basketProducTitle;
  }

  async getTotalPrice(): Promise<any> {
    const totalPrice = await this.page.locator(MainLocators.TOTALPRICE).innerText();
    return totalPrice;
  }
  async addToBasket(): Promise<any> {
    await this.page1.locator(MainLocators.ADDTOBASKET).click();
    await this.page1.waitForTimeout(1000);
  }

  async goToBasket(): Promise<any> {
    await this.page1.locator(MainLocators.BASKETICON).click();
  }

  async clickRandomProduct(): Promise<any> {
    const product = await this.page.locator(MainLocators.PRODUCTLIST+'['+randomUtils.getRandomNumber(1,20)+']');
    await product.click();
  }

  async closePopup(): Promise<any> {
    await this.page.getByRole('button', { name: 'Tümünü Reddet' }).click();
  }

  async closeBasketPopup(): Promise<any> {
    await this.page1.getByRole('button', { name: 'Anladım' }).click();
  }
  async waitPageLoad(): Promise<any> {
    const page1Promise = this.page.waitForEvent('popup');
    this.page1 = await page1Promise;
    await this.page1.getByRole('button', { name: 'Anladım' }).click();
  }




}

