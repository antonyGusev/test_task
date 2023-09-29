import { BaseFragment, Button, IProductsGrid, IProductsGridClick, ProductsGrid } from '../../../../lib';

export interface ICatalogFragmentSendKeys {
  //
}

export interface ICatalogFragmentClick {
  nextPageButton?: null;
  catalogProductsGrid?: IProductsGridClick
}

export interface ICatalogFragmentGetData {
  catalogProductsGrid?: null
}

export interface ICatalogFragmentResult {
  nextPageButton?: string;
  catalogProductsGrid?: any;
}

export class CatalogFragment extends BaseFragment {
  private nextPageButton: Button;
  private catalogProductsGrid: IProductsGrid;

  constructor(selector: string, name: string) {
    super(selector, name)
    this.nextPageButton = this.initChild(Button, 'a.button.pagination__direction--forward', 'Next page button');
    this.catalogProductsGrid = this.initChild(ProductsGrid, 'section.content_type_catalog', 'Products catalog grid');
}

};
