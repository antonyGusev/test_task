import { IPage, IElementHandle, pubsub } from '..';
import { step } from '../reporter';
import { waiters } from '../helpers';

export class BaseElement {
  private page: IPage | undefined;
  private selector: string;
  protected currentElement: IElementHandle | null = null;
  private name: string;

  constructor(selector: string, name?: string) {
    this.selector = selector;
    this.name = name || BaseElement.name;

    pubsub.subscribe('current_page', this.initPage.bind(this));
    pubsub.publish('entity_Initialization', this);
  }

  private get id() { return this.name }

  private initPage(page: IPage): void {
    this.currentElement = null;
    this.page = page;
  }

  @step((name: string) => `${name} init element`, true)
  protected async initElement(): Promise<void> {
    await waiters.waitForVisible(this, 6500);
    this.currentElement = await this.page!.$(this.selector);
  }

  @step((name: string) => `Send keys to ${name}`)
  async sendKeys(value: string): Promise<void> {
    if (!this.currentElement) await this.initElement();

    await this.currentElement!.scrollIntoViewIfNeeded();
    await this.currentElement!.type(value);
  }

  @step((name: string) => `Click on ${name}`)
  async clickOn(data: any) {
    if (!this.currentElement) await this.initElement();

    await this.currentElement!.scrollIntoViewIfNeeded();
    await this.currentElement!.click();
  }

  @step((name: string) => `Get data from ${name}`)
  async getData(): Promise<string | HTMLElement> {
    if (!this.currentElement) await this.initElement();

    await this.currentElement!.scrollIntoViewIfNeeded();
    return this.currentElement!.innerText();
  }
};

export const _$ = (selector: string, name?: string): BaseElement => new BaseElement(selector, name);
