import { BaseFragment, Text, Button, ListUL, IListULGetData } from "../../../../../lib";

export interface IProductInfoLeftFragmentSendKeys {
  //
}

export interface IProductInfoLeftFragmentClick {
  detailedDescriptionButton?: null
}

export interface IProductInfoLeftFragmentGetData {
  detailedDescriptionButton?: null;
  thumbnailsGalary?: IListULGetData;
}

export interface IProductInfoLeftFragmentResult {
  detailedDescriptionButton?: string;
  thumbnailsGalary?: string;
}

export class ProductInfoLeftFragment extends BaseFragment {
  private thumbnailsGalary: ListUL;
  private detailedDescriptionButton: Button;

  constructor(selector: string, name: string) {
    super(selector, name)
    this.thumbnailsGalary = this.initChild(ListUL, 'div.main-gallery', 'Thumbnails galary list');
    this.detailedDescriptionButton =
      this.initChild(Button, 'button.product-about__description-anchor', 'Detailed description button');
  }

};
