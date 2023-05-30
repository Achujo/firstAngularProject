import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  sdata='say my name'

  constructor() { }

  smethod(){
    // alert('service method')
  }
}
