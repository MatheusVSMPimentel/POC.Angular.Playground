import {ComponentFixture, TestBed } from '@angular/core/testing'
import { Component} from '@angular/core';

import { FileSizePipe } from './filesize.pipe';
import { cpf } from 'ng-brazil';

describe('FileSizePipe', () => {

    describe('Isolated Test', () => {
        const pipe = new FileSizePipe();
        it('Should convert bytes to MB', () => {
            expect(pipe.transform('123456789')).toBe('117.74 MB');
            expect(pipe.transform('987654321')).toBe('941.90 MB');
        });

        it('Should convert bytes to GB', () => {
            expect(pipe.transform('1342177280')).toBe('1.25 GB');
        });
    });


    describe('behavioral test', () => {
        @Component({
            template: `
                Size: {{ size | filesize }}
            `
        })
        class TestComponent{
            size = '123456789'
        }

        let component : TestComponent;
        let fixture : ComponentFixture<TestComponent>;
        let el: HTMLElement;

        beforeEach(()=>{
            TestBed.configureTestingModule({
                declarations: [
                    
                    TestComponent
                ],
                imports:[FileSizePipe]
            });

            fixture = TestBed.createComponent(TestComponent);
            component = fixture.componentInstance;
            el = fixture.nativeElement;
        
        })

        it('Should convert bytes to MB', ()=>{
            fixture.detectChanges();
            expect(el.textContent).toContain('Size: 117.74 MB')
            component.size = '1029281';
            fixture.detectChanges();
            expect(el.textContent).toContain('Size: 0.98 MB')
        })

        it('Should convert bytes to GB', ()=>{
            component.size = '1342177280';
            fixture.detectChanges();
            expect(el.textContent).toContain('Size: 1.25 GB')
        })
    })
});
