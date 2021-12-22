import { BaseFragment, Text, Button } from "../../../../../lib";

export interface IProductInfoRightFragmentSendKeys {
  //
}

export interface IProductInfoRightFragmentClick {
  buyButton?: null
}

export interface IProductInfoRightFragmentGetData {
  oldPrice?: null;
  newPrice?: null;
  buyButton?: null;
}

export interface IProductInfoRightFragmentResult {
  oldPrice?: string;
  newPrice?: string;
  buyButton?: string;
}

export class ProductInfoRightFragment extends BaseFragment {
  private oldPrice: Text;
  private newPrice: Text;
  private buyButton: Button;
  
  constructor(selector: string, name: string) {
    super(selector, name)
    this.oldPrice = this.initChild(Text, 'p.product-prices__small', 'Old price');
    this.newPrice = this.initChild(Text, 'p.product-prices__big', 'New price');
    this.buyButton = this.initChild(Button, 'button.buy-button.button_with_icon', 'Buy button');
  }

};
