import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Helpers } from '../../helpers/helpers';

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: [ './users.component.css' ]
})

export class UsersComponent implements OnInit {

  constructor(private router: Router, private helpers: Helpers) { }

  ngOnInit() {


    this.router.navigate(['/users']);

  }

}