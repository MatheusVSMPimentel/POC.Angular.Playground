import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CounterComponent } from "./counter.component"

describe('Counter Component Test', ()=>{
    let component: CounterComponent;
    let componentFixture: ComponentFixture<CounterComponent>;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [
                CounterComponent
            ]
        });
        componentFixture = TestBed.createComponent(CounterComponent);
        component = componentFixture.componentInstance;
component.counterAddNumber
        component.counterValue = 0;
    });

    it('Increase method should work increasing counterAddNumber value',()=>{
        component.increase();
        expect(component.counterValue).toBe(1);
    });

    it('Decrease method should work decreasing counterAddNumber value',()=>{
        component.increase();
        expect(component.counterValue).toBe(1);
        component.decrease();
        expect(component.counterValue).toBe(0);
    });

    it('Decrease method shouldn\'t decrease below the minValue',()=>{
        component.increase();
        expect(component.counterValue).toBe(1);
        component.decrease();
        expect(component.counterValue).toBe(0);
        component.decrease();
        expect(component.counterValue).toBe(0);
    });

    it('Increase method shouldn\'t increase above the maxValue',()=>{
        for(let i = 0 ; i < 200; i++){
            component.increase();
        }
        expect(component.counterValue).toBe(100);
    });
})