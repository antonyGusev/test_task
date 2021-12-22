declare const allure: any;

const {TECH_INFO} = process.env;

export function stepAllure(stepName: string | Function, isTechInfo: boolean = false) {
  return function(_target: any, propNmae: any, descriptor: any) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      if (isTechInfo && TECH_INFO) {
        return allure.step(typeof stepName === 'function' ? stepName(this.id) : stepName, () => originalMethod.call(this, ...args));
      } else if (isTechInfo && !TECH_INFO) {
        return originalMethod.call(this, ...args);
      }

      return allure.step(typeof stepName === 'function' ? stepName(this.id) : stepName, () => originalMethod.call(this, ...args));
    }

    return descriptor;
  }
};
