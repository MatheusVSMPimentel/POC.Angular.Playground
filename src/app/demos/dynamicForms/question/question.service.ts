import { Injectable } from "@angular/core";
import { BaseForm } from "../base-form";
import { Textbox } from "../base-form-textbox";
import { Dropdown } from "../base-form-dropdown";

@Injectable({
  providedIn: 'root',
})
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: BaseForm<any>[] = [

      new Textbox({
        key: 'name',
        label: 'Name',
        value: '',
        required: true,
        order: 1
      }),

      new Textbox({
        key: 'lastName',
        label: 'Last Name',
        value: '',
        required: true,
        order: 2
      }),

      new Textbox({
        key: 'emailAddress',
        label: 'E-mail',
        type: 'email',
        required: true,
        order: 3
      }),

      new Textbox({
        key: 'instagram',
        label: 'Instagram',
        required: true,
        order: 4
      }),

      new Textbox({
        key: 'contactMessage',
        label: 'Message',
        type: 'textbox',
        required: true,
        order: 5
      }),

      new Dropdown({
        key: 'tipo',
        label: 'Tipo de Contato',
        options: [
          {key: '01',  value: 'Cliente'},
          {key: '02',  value: 'Fornecedor'},
          {key: '03',   value: 'Família'},
          {key: '04', value: 'Amigo'}
        ],
        order: 6
      })

    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
