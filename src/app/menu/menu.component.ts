import { Component, OnInit } from '@angular/core';
// 
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import {PushNotificationsService} from '../services/push-notifications.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public atAuth : AngularFireAuth,
    private router : Router   ,
    public pushS : PushNotificationsService        
    ) { }

    public token : any;
    public showPanel : boolean = false; 

  ngOnInit(){
    this.pushS.watchMessages();
  }

  setToken(){
    this.token = this.pushS.getSubscription();
    console.log(this.token);
    this.toggleNotificationsWindow();
    this.pushS.refreshToken();
  }

  requestPushPermissions(){
    return this.pushS.requestPermission().then(()=> this.setToken());  
  }
  cancePermossopn(){
    this.pushS.cancePermossopn().then(()=> this.setToken());  
      // this.toggleNotificationsWindow();
  }

  toggleNotificationsWindow(){
    this.showPanel = !this.showPanel;
  }

  logut(){
    this.atAuth.auth.signOut().then(()=>{
      this.router.navigate(['/login']);
    })
  }
  
}
