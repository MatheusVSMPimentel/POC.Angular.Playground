import { Component, Input } from '@angular/core';
import { BaseForm } from './base-form';
import { BaseFormService } from './base-form.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './question/question.service';

@Component({
  selector: 'app-dynamic-forms',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf,QuestionComponent, NgFor],
  providers: [BaseFormService],
  templateUrl: './dynamic-forms.component.html',
  styles: ``
})
export class DynamicFormsComponent {

  @Input() questions: BaseForm<any>[] = [];
  form: FormGroup = new FormGroup({});
  payLoad = '';

  constructor(private qcs: BaseFormService, private service: QuestionService) {  }

  ngOnInit() {
    this.questions = this.service.getQuestions();
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
