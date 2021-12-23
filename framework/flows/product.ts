import { pageProvider } from '../pages';

const productPage = pageProvider.product();

async function getCurrentPrice() {
  const { productLayout } = await productPage.getData({ productLayout: { productInfoRight: { newPrice: null } } });
  return productLayout.productInfoRight.newPrice;
}

async function getDataFromThumbnailsGalary() {
  const { productLayout } = await productPage.getData({
    productLayout: {
      productInfoLeft: {
        thumbnailsGalary: {
          imageText: true,
          screenshot: true
        }
      }
    }
  });
  return productLayout.productInfoLeft.thumbnailsGalary;
}

export const productFlows = {
  getCurrentPrice, getDataFromThumbnailsGalary
};
