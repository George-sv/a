import { Component, OnInit } from '@angular/core';

// Services
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth : LoginService ) { }

  ngOnInit(){
    this.auth.getUser().subscribe(console.log)
  }


  LoginGoogle(){
    console.log('Click en el button para iniciar session');
    this.auth.login().then(console.log);
  }

}
