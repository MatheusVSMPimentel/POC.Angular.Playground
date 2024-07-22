import { Injectable } from "@angular/core";
import {CanDeactivate } from "@angular/router";
import { RegistrationComponent } from "../demos/reactiveForms/registration/registration.component";

@Injectable()
export class RegisterGuard implements CanDeactivate<RegistrationComponent>
{
    canDeactivate(component: RegistrationComponent): boolean {
        if(component.dirtyFormNotSended){
            return window.confirm('The register form was not submitted, Do you really want to leave?')
        }
        return true;
    }

}