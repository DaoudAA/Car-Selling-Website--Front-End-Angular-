import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }
  login(id : string, pwd : string){
    if (id === 'admoun' && pwd === 'saka'){
      return 200 ; 
    }else{
      return 403;
    }
  }
  logout(){
    this.router.navigate(['login']);
  }
}
