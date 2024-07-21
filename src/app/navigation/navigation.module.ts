import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule, NgFor } from "@angular/common";
import { RouterLink, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
    declarations: [MenuComponent,HomeComponent,FooterComponent, NotFoundComponent],
    imports: [
        CommonModule,
        RouterModule,
        RouterLink, NgFor
    ],
    exports:[MenuComponent,HomeComponent,FooterComponent, NotFoundComponent]
})
export class NavigationModule{

}