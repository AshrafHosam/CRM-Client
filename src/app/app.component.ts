import { Component } from '@angular/core';

//@Component({
//  selector: 'app-root',
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
//})
//export class AppComponent {
//  title = 'CRM-Client';
//}

@Component({
  selector: 'pm-root',
  template: '<div><h1>{{pageTitle}} </h1>  <div> Products <pm-products> </pm-products></div> </div>'
})

export class AppComponent {
  pageTitle: string = 'Simulated CRM Solution';
}
