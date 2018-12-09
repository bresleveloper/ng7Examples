import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Compy1Component } from '../comps/compy1/compy1.component';
import { Compy2Component } from '../comps/compy2/compy2.component';
import { InlineComponent } from '../comps/inline/inline.component';
import { RedmiDirective } from '../dir/redmi.directive';

@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [   
    Compy1Component,
    Compy2Component,
    InlineComponent,
    RedmiDirective,
  ],
  exports:[
    Compy1Component,
    Compy2Component,
    InlineComponent,
    RedmiDirective,
  ]
})
export class M1Module { }
