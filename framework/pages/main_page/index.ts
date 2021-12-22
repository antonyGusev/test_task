import { BasePage } from '../../../lib';
import {
  CatalogFragment, HeaderFragment,
  ICatalogFragmentClick, IHeaderFragmentSendKeys,
  ICatalogFragmentResult, IHeaderFragmentClick,
  ICatalogFragmentGetData, IHeaderFragmentResult,
} from './fragments';

export interface IMainPage {
  sendKeys(data: IMainPageSendKeys): Promise<void>;
  clickOn(data: IMainPageClick): Promise<void>;
  getData(data: IMainPageGetData): Promise<IMainPageResult>;
}

interface IMainPageSendKeys {
  header?: IHeaderFragmentSendKeys;
}

interface IMainPageClick {
  header?: IHeaderFragmentClick;
  catalog?: ICatalogFragmentClick
}

interface IMainPageGetData {
  catalog?: ICatalogFragmentGetData
}

interface IMainPageResult {
  header?: IHeaderFragmentResult;
  catalog?: ICatalogFragmentResult
}

export class MainPage extends BasePage {
  private header: HeaderFragment;
  private catalog: CatalogFragment;

  constructor() {
    super('#root', 'Main page')
    this.header = this.initChild(HeaderFragment, 'header', 'Header');
    this.catalog = this.initChild(CatalogFragment, 'div.catalog', 'Catalog');
  }

};
