import { Component } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {routes} from "./app.module";
// import {Routes} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  navLinks = routes;

  constructor(public auth: AuthenticationService) {}
}
