import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // data='Hey You how are you'
  //pData='Enter the ac no'

  serviceData:any

  constructor(private rout:Router,private ds:DatasService){}

  ngOnInit():void {
    this.serviceData=this.ds.sdata
    console.log(this.serviceData);
    this.ds.smethod()
    
  }

  login(a:any){
    console.log(a.value);  // Tempelate rendering Variable
    
    alert('Login clicked')
    this.rout.navigateByUrl('homepage')
    
  }
 
}