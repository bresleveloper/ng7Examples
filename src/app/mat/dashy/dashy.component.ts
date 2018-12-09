import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'mat-dashy',
  templateUrl: './dashy.component.html',
  styleUrls: ['./dashy.component.css'],
})
export class DashyComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card m1', cols: 1, rows: 1, content:'this is my famous header' },
          { title: 'Card m2', cols: 1, rows: 1,content:'small right card' },
          { title: 'Card m3', cols: 1, rows: 1, content:'small wrong card' },
          { title: 'Card m4', cols: 1, rows: 1 , content:'a datatable should be here'}
        ];
      }

      return [
        { title: 'Card r1', cols: 2, rows: 1, content:'this is my famous header' },
        { title: 'Card r2', cols: 1, rows: 1,content:'small right card' },
        { title: 'Card r3', cols: 1, rows: 2, content:'small wrong card' },
        { title: 'Card r4', cols: 1, rows: 1 , content:'a datatable should be here'}
    ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
