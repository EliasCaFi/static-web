import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.http.get('/.auth/me')
        .subscribe((resp: any) => {
          if (!!resp.clientPrincipal) {
            this.name = resp.clientPrincipal.userDetails
          }
        });
  }
}
