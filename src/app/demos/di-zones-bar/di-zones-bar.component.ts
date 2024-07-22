import { Component, Inject, Injector, NgZone, OnInit } from '@angular/core';
import { BarMockServices, BarServiceFactory, BarServices, DrinkService } from './bar.services';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { BAR_UNIT_CONFIG, BarUnitConfig } from './bar.config';

@Component({
  selector: 'app-di-zones-bar',
  templateUrl: './di-zones-bar.component.html',
  providers: [
    //{ provide: BarServices, useClass: BarServices }
    //{ provide: BarServices, useClass: BarMockServices }
    { provide: BarServices, useFactory: BarServiceFactory, deps:[HttpClient, Injector /* BAR_UNIT_CONFIG */ ] },
    { provide: DrinkService, useExisting: BarServices}

  ],
  styles: ``,

})
export class DiZonesBarComponent implements OnInit {
  barData!: string; 
  barDrink1: string = '';
  barDrink2: string = '';
  ManualConfig!: BarUnitConfig;
  
  public progress: number = 0;
  public label!: string;

  constructor(private baseService: BarServices,
    private drinkService: DrinkService,
    private ngZone: NgZone,
    @Inject(BAR_UNIT_CONFIG) private apiConfigManual: BarUnitConfig
  ) {

  }

  ngOnInit() {
    this.barDrink1 = this.baseService.getDrinks();
    this.barDrink2 = this.drinkService.getDrinks();
    this.ManualConfig = this.apiConfigManual;
    this.barData = this.baseService.getBarUnit()
  }

    processWithinAngularZone() {
    this.label = 'dentro';
    this.progress = 0;
    this._increaseProgress(() => console.log('Finalizado por dentro do Angular!'));
  }

  processOutsideOfAngularZone() {
    this.label = 'fora';
    this.progress = 0;
    this.ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this.ngZone.run(() => { console.log('Finalizado fora!'); });
      });
    });
  }

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Progresso atual: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallback), 10);
    } else {
      doneCallback();
    }
  }
}
