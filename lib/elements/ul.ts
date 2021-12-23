import * as path from 'path';
import moment from 'moment';

import { BaseElement, IElementHandle, IPage, mapAsync, step } from '..';

export interface IListUL {
  sendKeys(data: IListULSendKeys): Promise<void>;
  clickOn(data: IListULClickOn): Promise<void>;
  getData(data: IListULGetData): Promise<IListULResult>;
}

interface IListULSendKeys {
  //
}

export interface IListULClickOn {
  tile__title?: string
}

export interface IListULGetData {
  imageText?: boolean;
  screenshot?: boolean;
}

interface IListULResult {
  //
}

export class ListUL extends BaseElement {
  constructor(selector: string, name?: string) {
    super(selector, name)
  }

  @step((name: string) => `Get data from ${name}`)
  async getData(data: IListULGetData): Promise<any> {
    if (!this.currentElement) await this.initElement();

    let result;
    const ul = await this.currentElement!.$('ul');
    const liList = await ul!.$$('li');

    if (data.screenshot) {
      await this.makeScreenshot(liList);
    }

    if (data.imageText) {
      result = await this.getImageText(liList);
    } else {
      result = await this.getText(liList);
    }
    
    return result;
  }

  /**
   * @Private_methods
   * 
   */
  private async makeScreenshot(arr: any[]) {
    return mapAsync(arr, async (el: IElementHandle, i) => {
      return el.screenshot({ path: path.resolve(process.cwd(), `./screenshots/elements/listUL/listUL_${i}.png`) });
    });
  }

  private async getText(arr: any[]) {
    return mapAsync(arr, async (el: IElementHandle) => await el.innerText());
  }

  private async getImageText(arr: any[]) {
    return mapAsync(arr, async (el: IElementHandle) => {
      const img = await el.$('img');
      return img!.getAttribute('alt')
    });
  }
};
