import { BaseFragment, BaseElement, Text, Input } from "../../../../lib";
import {
  IProductInfoRightFragmentGetData, IProductInfoRightFragmentResult,
  ProductInfoRightFragment, ProductInfoLeftFragment, IProductInfoLeftFragmentGetData, IProductInfoLeftFragmentResult
} from "./sub_fragments";

export interface IProductLayoutFragmentSendKeys {
  //
}

export interface IProductLayoutFragmentClick {
  //
}

export interface IProductLayoutFragmentGetData {
  productInfoRight?: IProductInfoRightFragmentGetData;
  productInfoLeft?: IProductInfoLeftFragmentGetData
}

export interface IProductLayoutFragmentResult {
  productInfoRight: IProductInfoRightFragmentResult;
  productInfoLeft: IProductInfoLeftFragmentResult
}

export class ProductLayoutFragment extends BaseFragment {
  private productInfoRight: ProductInfoRightFragment;
  private productInfoLeft: ProductInfoLeftFragment;

  constructor(selector: string, name: string) {
    super(selector, name)
    this.productInfoRight = this.initChild(ProductInfoRightFragment, 'div.product-about__right', 'Product info right column');
    this.productInfoLeft = this.initChild(ProductInfoLeftFragment, 'div.product-about__left', 'Product info left column');
  }

};
