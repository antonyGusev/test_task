import { logger } from './logger';
import { browser } from '../browser';
import * as path from 'path';

declare const allure: any;
const { REPORTER } = process.env;

function itDecorated(itTitle: string, testFn: Function) {
  it(itTitle, decorateTest(itTitle, testFn));
}

const decorateTest = (itTitle: string, testFn: Function) => {
  return async () => {
    try {
      await testFn();
    } catch (error: any) {
      if (error.toString().includes('AssertionError')) {
        logger.spaceRed(`[ASSERTION: ${itTitle}]`);
      } else {
        logger.spaceYellow(`[BROKEN: ${itTitle}]`);
      }

      if (REPORTER === 'allure') {
        const screenshot = await browser.screenshot(path.resolve(process.cwd(), `./screenshots/${itTitle}.failed.png`));
        allure.createAttachment(`${it} failed`, screenshot, 'image/png');
      }

      throw error;
    }
  }
};

export {
  itDecorated as it
};
