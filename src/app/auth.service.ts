import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import { AccountService } from './account.service';
import { UserInfo } from './user-info';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(private accountService: AccountService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const userIsAuthenticated = this.accountService.getUser().pipe(
      map((u: UserInfo) => {
        return u.clientPrincipal !== null;
      }
    ));

    return userIsAuthenticated;
  }
}
