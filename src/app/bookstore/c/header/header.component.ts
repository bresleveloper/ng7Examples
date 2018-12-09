import { Component, OnInit } from '@angular/core';

export declare enum ViewEncapsulation{
    Emulated = 0,
    Native = 1, 
    None = 2
}


@Component({
  selector: 'bookstore-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation:2
})
export class HeaderComponent implements OnInit {

    title= "best header section"
    
  constructor() { }

  ngOnInit() {
  }

}

