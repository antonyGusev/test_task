import { BaseElement, filterAsync, IElementHandle, IPage, mapAsync, step } from '..';

export interface ITable {
  sendKeys(data: ITableSendKeys): Promise<void>;
  clickOn(data: ITableClick): Promise<void>;
  getData(): Promise<ITableResult>;
}

interface ITableSendKeys {
  //
}

export interface ITableClick {
  tile__title?: string
}

interface ITableResult {
  //
}

export class Table extends BaseElement {
  constructor(selector: string, name?: string) {
    super(selector, name)
  }

  @step((name: string) => `Get data from ${name}`)
  async getData(): Promise<any> {
    if (!this.currentElement) await this.initElement();

    const contentTitlesMap = await this.getContentTitlesMap();
    return this.getCardsContent(contentTitlesMap);
  }

  @step((name: string) => `Click on ${name}`)
  async clickOn(data: ITableClick) {
    if (!this.currentElement) await this.initElement();

    const neededTitle = await this.currentElement!.$(`.goods-${Object.keys(data).join()}:has-text("${data.tile__title}")`);
    try {
      await neededTitle!.scrollIntoViewIfNeeded();
      await neededTitle!.click();
    } catch (error: any) {
      throw new Error(`
      Can't find element with given locator: ".goods-${Object.keys(data).join()}:has-text("${data.tile__title}")
      Error message: ${error.message}
      `)
    }
  }

  /**
   * Private methods
   * 
   */
  private async getCardsContent(titlesMap: any) {
    const goodsCards = await this.currentElement!.$$('div.goods-tile__inner');

    return goodsCards.reduce(async (acc: any, cur) => {
      const cardDatasArr = await acc;
      const cardData: { [k: string]: any } = {};

      for (const key of Object.keys(titlesMap)) {
        const elem = await cur.$(`.goods-${key}`);
        cardData[key] = await elem?.textContent();
      }

      cardDatasArr.push(cardData);

      return cardDatasArr;
    }, Promise.all([]))
  }

  private async getContentTitlesMap() {
    const titlesMap: { [k: string]: any } = {};

    const goodsCard = await this.currentElement!.$('div.goods-tile__inner')
    const cardContent = await goodsCard!.$$('[class*=goods-tile__]')

    const visibleContent: IElementHandle[] = await filterAsync(cardContent, node => node.isVisible());
    const convinientElements = await filterAsync(visibleContent, (node) => {
      return node._preview.includes('div') || node._preview.includes('span');
    });

    const contentTitles = await mapAsync(convinientElements, node => {
      const contentTitle = node._preview.match(/(goods-tile__)\w+\S([a-z])\w+/);

      if (contentTitle[0] !== 'goods-tile__hidden-content') {
        return contentTitle[0].replace('goods-', '');
      };
    })

    const filteredTitles = contentTitles.filter(title => title);

    for (let i = 0; i < filteredTitles.length; i++) {
      titlesMap[filteredTitles[i]] = i;
    }

    return titlesMap;
  }
};
