import { Injectable } from '@angular/core';

@Injectable()
export class IncPrivateService {

    privateValue:number=0
  constructor() { 
    console.log('IncPrivateService ctor')

  }
}
