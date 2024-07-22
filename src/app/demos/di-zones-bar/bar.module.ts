import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { DiZonesBarComponent } from "./di-zones-bar.component";
import { BAR_UNIT_CONFIG, BarUnitConfig } from "./bar.config";

@NgModule({
    imports: [CommonModule
    ],
    declarations: [DiZonesBarComponent],
    exports: [DiZonesBarComponent],
    providers: []
})
export class BarModule {
    
    static forRoot(config: BarUnitConfig): ModuleWithProviders<BarModule>{
        return {
            ngModule: BarModule,
            providers: [
                //{provide: 'ManualBarUnitConfig', useValue: config}
                {provide: BAR_UNIT_CONFIG, useValue: config}
            ]
        }
    }

    static forChild(): ModuleWithProviders<BarModule>{
        return {
            ngModule: BarModule,
            providers: [

            ]
        }
    }
 }