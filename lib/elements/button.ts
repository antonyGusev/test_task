import { BaseElement, IPage, step } from '..';

export class Button extends BaseElement {
  constructor(selector: string, name?: string) {
    super(selector, name)
  }

  @step((name: string) => `${name} call send keys`)
  async sendKeys(data: any) {
    throw new Error('Button can not fill any value');
  }
};
