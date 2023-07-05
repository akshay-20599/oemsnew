import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public loginStatusSubjec=new Subject<boolean>()

  //use this function to use token
   public generateToken(data:any){
    return this.http.post(`${baseUrl}generate-token`,data)
   }

   //login user can set token in localStorage
   public loginuser(token:any){
  return localStorage .setItem('token', token)
   }


  //isloggin check user login or not
   public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr==null || tokenStr=='' || tokenStr==undefined){
      return false;
    } 
    else{
      return true;
    }
   }

   //get token to use multiple time whenever we want
   public setToken(){
    return localStorage.getItem('token')
   }

  //  it will shows the details of current user current user take in postman
  public getCurrentUser(){
      return this.http.get(`${baseUrl}current-user`)
  }
 //data which we get from current user that we store in local storage and convert that into string formate
  public setUser(user:any){
    return localStorage.setItem('user',JSON.stringify(user))
  }

  // it will clear (token and user data) data from local storage
  public logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return true;
  }

  public getToken(){
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token')
    
  }
// if user data not null then return data into JSON formate else logout
 public getUser(){
 let userStr=localStorage.getItem('user')
 if(userStr!=null){
 return JSON.parse(userStr)
 }

 else{
 this.logout;
 return null
 }
}

//to cheak the User role that it is admin or Normal user
getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority
}

public saveUser(data:any){
  return this.http.post(`${baseUrl}user/`, data)
}
}
