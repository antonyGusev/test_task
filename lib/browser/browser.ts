import * as fs from 'fs';
import { IPage, IBrowser, chromium, firefox, webkit } from '..';
import { pubsub } from '../helpers';

class BrowserAdapter {
  private currentPage: IPage | null = null;
  private browser: IBrowser | null = null;

  constructor() {
    pubsub.subscribe('entity_Initialization', this.initPageToRemoteCtx.bind(this))
  }

  initPageToRemoteCtx(ctx: any): void {
    ctx.initPage(this.currentPage);
  }

  async initCurrentPage(): Promise<IPage> {
    this.browser = await chromium.launch({ headless: false });
    this.currentPage = await this.browser.newPage();

    pubsub.publish('current_page', this.currentPage);

    return this.currentPage;
  }

  async goTo(url: string): Promise<void> {
    if (!this.currentPage) {
      await this.initCurrentPage();
    }

    await this.currentPage!.goto(url);
  }

  async close(): Promise<void> {
    await this.browser!.close();
    this.browser = null;
    this.currentPage = null;
    pubsub.publish('close_browser', this.currentPage);
  }

  async sleep(timeout = 1000): Promise<void> {
    await (() => new Promise(res => setTimeout(res, timeout)))();
  }

  async screenshot(path: string) {
    if (!this.currentPage) {
      await this.initCurrentPage();
    }

    await this.currentPage!.screenshot({ path });
    return fs.readFileSync(path)
  }
}

const browser = new BrowserAdapter();

export {
  browser
};
