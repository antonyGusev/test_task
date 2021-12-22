import { Page, ElementHandle, Browser, Locator, chromium, firefox, webkit } from 'playwright';

export interface IPage extends Page { };
export interface IElementHandle extends ElementHandle { };
export interface IBrowser extends Browser { };
export interface ILocator extends Locator { };

export { chromium, firefox, webkit };
