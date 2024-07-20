import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BaseForm } from '../base-form';
import { NgIf, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf,QuestionComponent, NgFor, NgSwitch, NgSwitchCase],
  templateUrl: './question.component.html',
  styles: ``
})
export class QuestionComponent {
  @Input() question!: any;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
