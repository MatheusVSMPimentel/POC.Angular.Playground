import { BaseForm } from './base-form';

export class Dropdown extends BaseForm<string> {
  override controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: any = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
