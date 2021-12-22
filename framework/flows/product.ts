import { pageProvider } from '../pages';

const productPage = pageProvider.product();

async function getCurrentPrice() {
  return productPage.getData({productLayout: {productInfoRight: {newPrice: null}}});
}

export const productFlows = {
  getCurrentPrice,
}