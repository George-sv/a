import { Injectable } from '@angular/core';
// 
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// import { IUser } from '../structures/users';
import { Observable } from 'rxjs/Rx';
// Service
import { LoginService } from '../services/login.service';
import { IUser } from '../structures/users';

// firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

   private users : AngularFirestoreCollection;

  constructor(private afs : AngularFirestore,private afAuth : AngularFireAuth){
    this.users = afs.collection('users')
   }

   add(user) : Promise<void>{
     console.log(user,'aqui estamos para guardas');
     return this.users.doc(user.uid).set(user).catch(console.log);
   }

   getUser() : Observable <IUser> {
    return this.afAuth.authState
    .take(1)
    .filter(user => !! user)
    .map((user : firebase.User)=>{
      return user as IUser;
    });
    }

   addToken(token : string){
     return new Promise((res,rej) =>{
       this.getUser().subscribe(user=>{
         this.saveToken(user,token).then(res).catch(rej);
       })
     })
   }

   saveToken(user : IUser, token : string) : Promise<any>{
    let tokens = user.tokens || {};
      if(token[token]) return Promise.resolve();
          tokens[token] = true;
            return this.users.doc(user.uid).update({tokens: tokens});
    //  this.users.doc(user.uid.up)
   }

 }
