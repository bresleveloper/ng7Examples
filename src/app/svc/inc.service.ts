import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncService {

    value:number=8
    baby:string='crying'
  constructor() {
      console.log('IncService ctor')
   }
}
