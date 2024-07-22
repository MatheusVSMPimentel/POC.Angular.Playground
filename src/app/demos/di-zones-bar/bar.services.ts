import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Injector } from "@angular/core";
import { BAR_UNIT_CONFIG, BarUnitConfig } from "./bar.config";

/* export function BarServiceFactory(client: HttpClient, config: BarUnitConfig) {
    return new BarServices(client, config);
} */
export function BarServiceFactory(client: HttpClient, config: Injector) {
    return new BarServices(client, config.get(BAR_UNIT_CONFIG));//service locator
}

@Injectable({
    providedIn: 'root'
})
export class BarServices {
    constructor(private httpClient: HttpClient,
        @Inject(BAR_UNIT_CONFIG) private config: BarUnitConfig
    ) { }

    getBarUnit(): string {
        return 'Bar Id: ' + this.config.barId + ' ---- ' + 'Token: ' + this.config.barToken
    }

    getDrinks(): string {
        return 'Bedidas'
    }

    getMealsPortion(): string {
        return 'Porções'
    }

    getMeals(): string {
        return 'Refeições'
    }

}

export abstract class DrinkService{
    getDrinks !: ()=> string
}


@Injectable()
export class BarMockServices {

    getDrinks(): string {
        return 'Mock.Bedidas'
    }

    getMealsPortion(): string {
        return 'Mock.Porções'
    }

    getMeals(): string {
        return 'Mock.Refeições'
    }

}