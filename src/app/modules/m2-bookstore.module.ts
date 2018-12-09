import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../bookstore/c/footer/footer.component';
import { HomeComponent } from '../bookstore/c/home/home.component';
import { HeaderComponent } from '../bookstore/c/header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [    
    FooterComponent,
    HomeComponent,
    HeaderComponent
  ],
  exports:[
    FooterComponent,
    HomeComponent,
    HeaderComponent 
  ]
})
export class M2BookstoreModule { }
