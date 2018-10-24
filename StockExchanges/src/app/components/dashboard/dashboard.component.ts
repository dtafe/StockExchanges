import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Helpers } from '../../helpers/helpers';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  constructor(private router: Router, private helpers: Helpers) { }

  ngOnInit() {


    this.router.navigate(['/dashboard']);

  }

}