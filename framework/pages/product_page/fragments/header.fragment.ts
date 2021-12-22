import { BaseFragment, BaseElement, Button, Input } from '../../../../lib';

export interface IHeaderFragmentSendKeys {
  search?: string;
}

export interface IHeaderFragmentClick {
  searchButton?: null;
}

export interface IHeaderFragmentGetData {
  //
}

export interface IHeaderFragmentResult {
  search?: string;
  searchButton?: string;
}

export class HeaderFragment extends BaseFragment {
  private search: BaseElement;
  private searchButton: BaseElement;

  constructor(selector: string, name: string) {
    super(selector, name)
    this.search = this.initChild(Input, 'input[name=search]', 'Search field');
    this.searchButton = this.initChild(Button, 'button.search-form__submit', 'Search button');
}

};
