import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Helpers } from '../../helpers/helpers';

@Component({

    selector: 'account-balance',
    templateUrl: './account-balance.component.html',
    styleUrls: [ './account-balance.component.css' ]
})

export class AccountBalanceComponent implements OnInit {

  constructor(private router: Router, private helpers: Helpers) { }

  ngOnInit() {


    this.router.navigate(['/dashboard']);

  }

}