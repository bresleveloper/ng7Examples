import { BrowserModule, DOCUMENT } from '@angular/platform-browser';
import { NgModule, ApplicationRef, Inject } from '@angular/core';

import { M1Module} from './modules/m1.module'
import { M2BookstoreModule} from './modules/m2-bookstore.module'

import { AppComponent } from './app.component';
import { BookstoreAppComponent } from './bookstore/bookstore-app/bookstore-app.component';

@NgModule({
  declarations: [
    AppComponent,

    BookstoreAppComponent
  ],
  imports: [
    BrowserModule,

    M1Module,
    M2BookstoreModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  entryComponents: [AppComponent,BookstoreAppComponent]
})
export class AppModule {
    private browser_document;
    ngDoBootstrap(appRef:ApplicationRef){
      if(this.browser_document
           .getElementsByTagName('app-root').length > 0){
         appRef.bootstrap(AppComponent);
      }
      if(this.browser_document
           .getElementsByTagName('bookstore-app').length > 0){
         appRef.bootstrap(BookstoreAppComponent);
      }
    }
    constructor(@Inject(DOCUMENT) private document: any){
      this.browser_document = document;
    }
  }
