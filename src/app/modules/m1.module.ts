import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Compy1Component } from '../comps/compy1/compy1.component';
import { Compy2Component } from '../comps/compy2/compy2.component';
import { InlineComponent } from '../comps/inline/inline.component';
import { RedmiDirective } from '../dir/redmi.directive';
import { HeaderComponent } from '../bookstore/c/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [   
    Compy1Component,
    Compy2Component,
    InlineComponent,
    RedmiDirective,
    HeaderComponent,
  ],
  exports:[
    Compy1Component,
    Compy2Component,
    InlineComponent,
    RedmiDirective,
    HeaderComponent,
  ]
})
export class M1Module { }
