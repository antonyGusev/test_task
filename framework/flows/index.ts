import { assertions } from '../../lib';
import { mainFlows } from './main';
import { productFlows } from './product';

export const I = {
  ...mainFlows,
  ...productFlows,
  ...assertions,
};
