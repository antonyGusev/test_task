import { logger } from './logger';

const { TECH_INFO } = process.env;

export const waiters = {
  waitForVisible: async (ctx: any, timeout: number) => {
    const { page, selector } = ctx;
    if (TECH_INFO) {
      logger.spaceYellow(`Wait for selector: ${selector}, during ${timeout / 1000} seconds`);
    };
    
    await page.waitForSelector(selector, { visible: true, timeout })
  }
};
