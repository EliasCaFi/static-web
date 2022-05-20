import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.http.get('api/message')
        .subscribe((resp: any) => this.value = resp.text);
  }

}
