import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bookstore-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation:2

})
export class HomeComponent implements OnInit {

    title="2nd to amazon bookstore"
    
  constructor() { }

  ngOnInit() {
  }

}
