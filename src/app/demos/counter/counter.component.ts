import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './counter.component.html',
  styles: ``
})
export class CounterComponent {
  @Input() counterAddNumber: number = 1;
  @Input() maxCounter: number = 100;
  @Input() minCounter: number = 0;

  @Output() alterCounterValue = new EventEmitter<number>();

  counterValue: number = 0;
  focus!: boolean;

  increase(){
    if(this.counterValue < this.maxCounter){
      this.counterValue = this.counterValue + this.counterAddNumber;
      this.alterCounterValue.emit(this.counterValue);
    }
  }

  decrease(){
    if(this.counterValue > this.minCounter){
      this.counterValue = this.counterValue - this.counterAddNumber;
      this.alterCounterValue.emit(this.counterValue);

    }
  }

  onBlur(event: FocusEvent){
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
  }

  onKeyUp(event: KeyboardEvent){
    let handlers: any = {
      ArrowDown: () => this.decrease(),
      ArrowUp: () => this.increase()
    }
    if(handlers[event.code]){
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
  }

  onFocus(event: FocusEvent){
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
  }
}
