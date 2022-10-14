import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sixpence';
  dataHolderBrands: any[] = [];

  constructor(private http: HttpClient) {
  }

  onClick() {
    console.log('onClick')
    this.http.get('https://sherbetfizz.ddns.net:9462/cdr/data-holders').subscribe(
      resp => {
        (resp as any[]).forEach(element => {
          this.dataHolderBrands.push(element)
        });
      }
    )
  }
}
