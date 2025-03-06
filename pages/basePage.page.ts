import { Page, Locator, chromium, firefox, webkit, Browser, expect } from '@playwright/test';
import exp from 'constants';



export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }



  /**
   * @param url URL adresi
   */
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
    expect(this.page.url()).toBe(url);
  }

  /**
   * Belirtilen alanı doldurur.
   * @param selector Alanın seçicisi
   * @param value Doldurulacak değer
   */
  async fillField(selector: string, value: string): Promise<void> {
    await this.page.fill(selector, value);
  }

  /**
   * Belirtilen butona tıklar.
   * @param selector Butonun seçicisi
   */
  async clickButton(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  /**
   * Label adıyla bir elemente tıklar.
   * @param labelName Label adı
   */
  async clickByLabel(labelName: string): Promise<void> {
    const element = this.page.getByLabel(labelName);
    await element.click();
  }

  /**
 * Label adıyla bir elemente tıklar.
 * @param labelName Label adı
 */
  async getByLabel(labelName: string): Promise<any> {
    const element = this.page.getByLabel(labelName);
    await element.waitFor({ state: 'visible' });
    return element;
  }

  /**
   * Placeholder metniyle bir elemente tıklar.
   * @param placeholder Placeholder metni
   */
  async clickByPlaceholder(placeholder: string): Promise<void> {
    const element = this.page.getByPlaceholder(placeholder);
    await element.click();
  }


 /**
* @param title 
* @param role 
*/

  /**
   * Belirtilen elementin görünür olup olmadığını doğrular.
   * @param selector Elementin seçicisi
   */
  async verifyElementVisible(selector: string): Promise<void> {
    const element = this.page.locator(selector);
    await element.waitFor({ state: 'visible' });
  }

  /**
 * Belirtilen elementin görünür olup olmadığını doğrular.
 * @param label Elementin seçicisi
 */
  async verifyElementVisibleByLabel(label: string): Promise<void> {
    const element = this.page.getByLabel(label);
    await element.waitFor({ state: 'visible' });
  }

  /**
   * Belirtilen elementin metnini alır.
   * @param selector Elementin seçicisi
   * @returns Metin içeriği
   */
  async getElementText(selector: string): Promise<string> {
    const element = this.page.locator(selector);
    return await element.innerText();
  }

  /**
   * Belirtilen elementin metnini kontrol eder
   * @param selector Elementin seçicisi
   * @param text Metin içeriği
   */
  async isElementHaveText(selector: string, text: string): Promise<void> {
    await expect(this.page.locator(selector)).toContainText(text);
  }

  /**
   * Dropdown seçim işlemi yapar.
   * @param selector Dropdown seçicisi
   * @param value Seçilecek değer
   */
  async selectDropdownValue(selector: string, value: string): Promise<void> {
    await this.page.selectOption(selector, value);
  }

  /**
   * Sayfanın URL'sini doğrular.
   * @param expectedUrl Beklenen URL
   */
  async verifyUrl(expectedUrl: string): Promise<void> {
    await this.page.waitForURL(expectedUrl);
  }

  /**
   * Ekran görüntüsü alır.
   * @param fileName Dosya adı
   */
  async takeScreenshot(fileName: string): Promise<void> {
    await this.page.screenshot({ path: fileName });
  }

  /**
   * Bir checkbox'ı işaretler veya işaretini kaldırır.
   * @param selector Checkbox seçicisi
   * @param check İşaretleme durumu (true = işaretle, false = kaldır)
   */
  async setCheckbox(selector: string, check: boolean): Promise<void> {
    const isChecked = await this.page.isChecked(selector);
    if (check !== isChecked) {
      await this.page.click(selector);
    }
  }


  async acceptAlert(): Promise<void> {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
  }

  async dismissAlert(): Promise<void> {
    this.page.once('dialog', async (dialog) => {
      await dialog.dismiss();
    });
  }

  /**
   * @param milliseconds Beklenecek süre (ms cinsinden)
   */
  async wait(milliseconds: number): Promise<void> {
    await this.page.waitForTimeout(milliseconds);
  }

  /**
   * @param selector Elementin seçicisi
   * @returns Element mevcut mu?
   */
  async isElementPresent(selector: string): Promise<boolean> {
    const element = this.page.locator(selector);
    return await element.count() > 0;
  }
}
