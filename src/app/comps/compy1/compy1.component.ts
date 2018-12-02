import { Component, OnInit } from '@angular/core';

import {IncService} from '../../svc/inc.service'
import {IncPrivateService} from '../../svc/inc-private.service'

@Component({
  selector: 'app-compy1',
  templateUrl: './compy1.component.html',
  styleUrls: ['./compy1.component.css'],
  providers:[IncPrivateService]

})
export class Compy1Component implements OnInit {

  constructor(public inc:IncService, public p:IncPrivateService) {
   }

   incy(){
       this.inc.value++;
       this.p.privateValue++;
   }

  ngOnInit() {
      //this.inc.value
  }

}
