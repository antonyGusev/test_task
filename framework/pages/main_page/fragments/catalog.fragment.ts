import { BaseFragment, Button } from '../../../../lib';
import { ITable, ITableClick, Table } from '../../../../lib/elements/table';

export interface ICatalogFragmentSendKeys {
}

export interface ICatalogFragmentClick {
  nextPageButton?: null;
  catalogTable?: ITableClick
}

export interface ICatalogFragmentGetData {
  catalogTable?: null
}

export interface ICatalogFragmentResult {
  nextPageButton?: string;
  catalogTable?: any;
}

export class CatalogFragment extends BaseFragment {
  private nextPageButton: Button;
  private catalogTable: ITable;

  constructor(selector: string, name: string) {
    super(selector, name)
    this.nextPageButton = this.initChild(Button, 'a.button.pagination__direction--forward', 'Next page button');
    this.catalogTable = this.initChild(Table, 'section.content_type_catalog', 'Catalog grid');
}

};
