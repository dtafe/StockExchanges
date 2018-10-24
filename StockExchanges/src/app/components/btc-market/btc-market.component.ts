import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Helpers } from '../../helpers/helpers';

@Component({
  selector: 'btc-market',
  templateUrl: './btc-market.component.html',
  styleUrls: [ './btc-market.component.css' ]
})

export class BtcMarketComponent implements OnInit {

  constructor(private router: Router, private helpers: Helpers) { }

  ngOnInit() {


    this.router.navigate(['/btc-market']);

  }

}