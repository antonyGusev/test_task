import { I } from './flows';
import { it, assertions, browser } from '../lib';

export const provider = {
  actionFlows: () => ({ I }),
  test: () => ({ it }),
  packages: () => ({ assertions, browser })
};
