import { Injectable } from '@angular/core';
// import { promise } from 'protractor';

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

// Observable
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';

// structures
import { IUser } from '../structures/users';

// Services
import { UsersService } from './users.service'; 

// Router 
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private afAuth : AngularFireAuth,private userS : UsersService, private router : Router){}

  getUser() : Observable <IUser> {
    return this.afAuth.authState
    .take(1)
    .filter(user => !! user)
    .map((user : firebase.User)=>{
      return user as IUser;
    });
    }

  login() : Promise<void>{
   return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  .then(result =>{
    console.log(result.user);
    this.router.navigate(["/"])
    return this.userS.add({uid: result.user.uid, email: result.user.email})
  }).catch(console.log);
  }
}
