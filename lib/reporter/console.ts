import objectInspect from 'object-inspect';

import {logger} from '..';

const {TECH_INFO} = process.env;

export function stepConsole(stepName: string | Function, isTechInfo: boolean = false) {
  return function(_target: any, propNmae: any, descriptor: any) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      const caller = _target.constructor.name.includes('Page') ? 'spaceGreen' : 'tabGreen' ;
      const isElement = _target.constructor.name.includes('Element');

      if (isTechInfo && TECH_INFO) {
        logger.spaceYellow(typeof stepName === 'function' ? stepName(this.id) : stepName);
      } else if (!isTechInfo) {
        const endMessage = isElement && args.length
          ? `${typeof stepName === 'function' ? stepName(this.id) : stepName} with args: ${objectInspect(args)}`
          : `${typeof stepName === 'function' ? stepName(this.id) : stepName}`;

        logger[caller](endMessage);
      }

      return originalMethod.call(this, ...args);
    }

    return descriptor;
  }
};
