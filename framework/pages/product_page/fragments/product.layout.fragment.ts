import { BaseFragment, BaseElement, Text, Input } from "../../../../lib";
import { IProductInfoRightFragmentGetData, IProductInfoRightFragmentResult, ProductInfoRightFragment } from "./sub_fragments";

export interface IProductLayoutFragmentSendKeys {
  //
}

export interface IProductLayoutFragmentClick {
  //
}

export interface IProductLayoutFragmentGetData {
  productInfoRight?: IProductInfoRightFragmentGetData;
}

export interface IProductLayoutFragmentResult {
  productInfoRight: IProductInfoRightFragmentResult;
}

export class ProductLayoutFragment extends BaseFragment {
  private productInfoRight: any;

  constructor(selector: string, name: string) {
    super(selector, name)
    this.productInfoRight = this.initChild(ProductInfoRightFragment, 'div.product-about__right', 'Product info right column');
  }

};
