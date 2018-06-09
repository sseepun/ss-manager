import { Component, enableProdMode } from '@angular/core';
import { Router } from '@angular/router';

enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router) { }
  
  ngOnInit() {
  }
}
