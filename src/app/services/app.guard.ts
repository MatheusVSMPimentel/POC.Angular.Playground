import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, CanMatch, GuardResult, MaybeAsync, Route, UrlSegment } from "@angular/router";

@Injectable()
export class AuthGuard implements CanLoad, CanMatch, CanActivate{

    user = { admin: false, logged: true}

    canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
        throw new Error("Method not implemented.");
    }

    canLoad(): boolean {
        return this.user.admin
    }
    canActivate(): boolean {
        return this.user.logged
    }
}