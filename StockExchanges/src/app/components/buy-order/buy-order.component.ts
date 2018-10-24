import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Helpers } from '../../helpers/helpers';

@Component({
  selector: 'buy-order',
  templateUrl: './buy-order.component.html',
  styleUrls: [ './buy-order.component.css' ]
})

export class BuyOrderComponent implements OnInit {

  constructor(private router: Router, private helpers: Helpers) { }

  ngOnInit() {


    this.router.navigate(['/buy-order']);

  }

}