import { InjectionToken } from "@angular/core";

export interface BarUnitConfig{
    barId: number;
    barToken: string;
}

export const BAR_UNIT_CONFIG = new InjectionToken<BarUnitConfig>('BarUnitConfig')