import { Component, OnInit } from '@angular/core';

import {IncService} from '../../svc/inc.service'
import {IncPrivateService} from '../../svc/inc-private.service'

@Component({
  selector: 'app-compy2-shuki',
  templateUrl: './compy2.component.html',
  styleUrls: ['./compy2.component.css'],
  providers:[IncPrivateService]

})
export class Compy2Component implements OnInit {

    constructor(public inc:IncService, public p:IncPrivateService) {
    }
 
    incy(){
        this.inc.value++;
       this.p.privateValue++;

    }
  ngOnInit() {
  }

}
