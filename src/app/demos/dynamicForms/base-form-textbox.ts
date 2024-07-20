import { BaseForm } from './base-form';


export class Textbox extends BaseForm<string> {
  override controlType = 'textbox';
  type: string;

  constructor(options: any = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
