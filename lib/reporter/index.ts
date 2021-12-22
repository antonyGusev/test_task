import { stepAllure } from './allure';
import { stepConsole } from './console';

const { REPORTER } = process.env;

export function step(stepName: string | Function, isTechInfo?: boolean) {
  if (REPORTER === 'allure') {
    return stepAllure(stepName, isTechInfo);
  } else {
    return stepConsole(stepName, isTechInfo);
  }
};
