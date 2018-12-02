import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[redmi]'
})
export class RedmiDirective {

  constructor(e:ElementRef) {
      e.nativeElement.style.color='orange'
   }

}
