import { IMainPage, MainPage } from './main_page';
import { IProductPage, ProductPage } from './product_page';
import { initSingleton } from '../../lib';

export const pageProvider = {
  main: (): IMainPage => initSingleton(MainPage),
  product: (): IProductPage => initSingleton(ProductPage),
};
