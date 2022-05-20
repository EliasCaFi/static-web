import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserInfo } from './user-info';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getUser() : Observable<UserInfo> {
    const a = this.http.get<UserInfo>('/.auth/me');
    return a;
  }
}
