import { BaseElement } from '.';
import { IPage, IElementHandle, pubsub } from '..';
import { step } from '../reporter'

interface BaseFragmentValues {
  [k: string]: any;
}

export class BaseFragment {
  private page: IPage | undefined;
  private selector: string;
  private name: string;

  constructor(selector: string, name: string) {
    pubsub.publish('entity_Initialization', this);
    pubsub.subscribe('current_page', this.initPage.bind(this));

    this.selector = selector;
    this.name = name;
  }

  private get id() { return this.name }

  private initPage(page: IPage) {
    this.page = page;
  }

  @step((name: string) => `${name} init child`, true)
  protected initChild(child: any, selector: string, name: string) {
    return new child(selector, name);
  }

  @step((name: string) => `Send keys to ${name}`)
  async sendKeys(data: BaseFragmentValues): Promise<void> {
    for (const [key, value] of Object.entries(data)) {
      await (this as { [k: string]: any })[key].sendKeys(value);
    }
  }

  @step((name: string) => `Click on ${name}`)
  async clickOn(data: BaseFragmentValues) {
    for (const [key, value] of Object.entries(data)) {
      await (this as { [k: string]: any })[key].clickOn(value)
    }
  }

  @step((name: string) => `Get data from ${name}`)
  async getData(data: BaseFragmentValues) {
    const values = { ...data };
    for (const [key, value] of Object.entries(data)) {
      values[key] = await (this as { [k: string]: any })[key].getData(value);
    }
    return values;
  }

};
