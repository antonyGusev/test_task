import { BasePage } from "../../../lib";
import { HeaderFragment } from "../main_page/fragments";
import { ProductLayoutFragment, IProductLayoutFragmentGetData, IProductLayoutFragmentResult } from "./fragments";

export interface IProductPage {
  sendKeys(data: IProductPageSendKeys): Promise<void>;
  clickOn(data: IProductPageClick): Promise<void>;
  getData(data: IProductPageGetData): Promise<IProductPageResult>;
}

interface IProductPageSendKeys {
  //
}

interface IProductPageClick {
  //
}

interface IProductPageGetData {
  productLayout?: IProductLayoutFragmentGetData
}

interface IProductPageResult {
  productLayout: IProductLayoutFragmentResult
}

export class ProductPage extends BasePage {
  private header: HeaderFragment;
  private productLayout: ProductLayoutFragment;

  constructor() {
    super('#root', 'Product page')
    this.header = this.initChild(HeaderFragment, 'header', 'Header');
    this.productLayout = this.initChild(ProductLayoutFragment, 'div[id=#scrollArea]', 'Product layout')
  }

};
