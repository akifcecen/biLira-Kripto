import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';
import { SearchPage } from '../pages/search.page';

let searchPage: SearchPage;

test('Check product page and basket page title of searched product ', async ({ page }) => {
    searchPage = new SearchPage(page);
    await searchPage.navigateTo("https://www.trendyol.com/");
    await searchPage.closePopup();
    await searchPage.searchProduct("bilgisayar");
    await searchPage.clickRandomProduct(); 
    await searchPage.waitPageLoad();
    const productTitle = await searchPage.getProductTitle();
    await searchPage.addToBasket();
    await searchPage.goToBasket();
    await searchPage.closeBasketPopup();
    const basketProductTitle = await searchPage.getBasketProductTitle();
    expect(productTitle).toBe(basketProductTitle);
  });

  test('Check product page and basket page price of searched product ', async ({ page }) => {
    searchPage = new SearchPage(page);
    await searchPage.navigateTo("https://www.trendyol.com/");
    await searchPage.closePopup();
    await searchPage.searchProduct("bilgisayar");
    await searchPage.clickRandomProduct(); 
    await searchPage.waitPageLoad();
    const productPrice = await searchPage.getProductPrice();
    await searchPage.addToBasket();
    await searchPage.goToBasket();
    await searchPage.closeBasketPopup();
    const basketProductPrice = await searchPage.getBasketProductPrice();
    expect(productPrice).toBe(basketProductPrice);
  });