import { BrowserModule, DOCUMENT } from '@angular/platform-browser';
import { NgModule, ApplicationRef, Inject } from '@angular/core';

import { M1Module} from './modules/m1.module'
import { M2BookstoreModule} from './modules/m2-bookstore.module'
import { M3MatModule} from './modules/m3-mat.module'

import { AppComponent } from './app.component';
import { BookstoreAppComponent } from './bookstore/bookstore-app/bookstore-app.component';
import { DashyComponent } from './mat/dashy/dashy.component';





@NgModule({
  declarations: [
    AppComponent,
    BookstoreAppComponent,
    DashyComponent

  ],
  imports: [
    BrowserModule,

    M1Module,
    M2BookstoreModule,
    M3MatModule,

  ],
  providers: [],
  //bootstrap: [AppComponent]
  entryComponents: [AppComponent,BookstoreAppComponent,DashyComponent]
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

      if(this.browser_document
            .getElementsByTagName('mat-dashy').length > 0){
        appRef.bootstrap(DashyComponent);
      }


    }
    constructor(@Inject(DOCUMENT) private document: any){
      this.browser_document = document;
    }
  }





//ng build --prod --base-href "https://<user-name>.github.io/<repo>/"
//ng build --prod --base-href "https://bresleveloper.github.io/ng7Examples/"



//ng build --prod --output-path docs --base-href


