import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // data='Hey You how are you'
  //pData='Enter the ac no'
  login(a:any){
    console.log(a.value);  // Tempelate rendering Variable
    
    alert('Login clicked')
    
  }
  Acnochange(event:any){
    console.log(event.target.value);
    

  }
}
