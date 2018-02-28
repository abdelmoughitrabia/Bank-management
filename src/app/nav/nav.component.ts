import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navId: number;
  mc: string;

  constructor(private router: Router) {
    this.navId = 0;
    this.mc = "";
  }

  ngOnInit() {
  }

  dashboard() {
    this.navId = 0;
  }

  addProduct() {
    this.navId = 1;
  }

  productList() {
    this.navId = 2;
  }


}
