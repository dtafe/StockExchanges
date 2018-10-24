import { Component, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/subscription';
import { Observable } from 'rxjs/Observable';
import { Helpers } from './helpers/helpers'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  subscription: Subscription;

  authentication: boolean;

  constructor(private helpers: Helpers) {

  }

  ngAfterViewInit() {

    this.subscription = this.helpers.isAuthenticationChanged().pipe(
      //startWith(this.helpers.isAuthenticated()),

      //delay(0)).subscribe((value) =>
        //this.authentication = value
      );
  }

  title = 'Angular 5 Seed';

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
