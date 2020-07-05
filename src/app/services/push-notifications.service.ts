import { Injectable } from '@angular/core';

// 
import * as firebase from 'firebase';
import { Subject, Observable } from 'rxjs';

// Services
import { UsersService } from '../services/users.service';


@Injectable({
  providedIn: 'root'
})
export class PushNotificationsService {

  public messaging = firebase.messaging();

  public sub : Subject<any> = new Subject();
  public notification : Observable<any> = this.sub.asObservable();


  constructor( private uS : UsersService ){
    this.messaging.getToken().then(console.log);
   }

  refreshToken(){
    this.messaging.onTokenRefresh(()=>{
      this.messaging.getToken().then(token => this.uS.addToken(token));
    })
  }

  watchMessages(){
    this.messaging.onMessage((Notification)=>{
      console.log(Notification);
      this.sub.next(Notification); 
    })
  }


  requestPermission() : Promise<any>{
    return this.messaging.requestPermission().then(()=>{
      return this.messaging.getToken();
    }).then(token =>{
          return this.uS.addToken(token);
    })
  }

  getSubscription(): Promise<any>{
    if(!navigator) return;
    return navigator.serviceWorker.getRegistrations().then(registrations =>{
        const firebaseSWs = registrations.filter(sw =>{
          return sw.active && sw.active.scriptURL.includes("firebase-messaging")
        });
          if(firebaseSWs.length <1 ) return Promise.resolve(null);

          return firebaseSWs[0].pushManager.getSubscription();

      })
    }

    cancePermossopn() : Promise<any>{
      const subscriptionPr = this.getSubscription();
      return subscriptionPr.then((pushS : PushSubscription)=>{
        if(! pushS) return Promise.resolve(null);
          return pushS.unsubscribe();
      })
    }
  
}
