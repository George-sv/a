import { Component, OnInit } from '@angular/core';

// Services
import { ListServiceService } from '../services/list-service.service';

// otros
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    trigger('enterState',[
      state('void',style({
        transform: 'translatex(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(1000,style({
         transform: 'translatex(0)',
         opacity:1
        }))
      ])
    ])
  ]
})
// animations: [
//   trigger('enterstate',[
//    transition("* => *",[
//     query(':enter',[
//       style({transform: 'translatex(-100%)',opacity:0}),
//       stagger(5000,[
//         animate(200, style({transform: 'translatex(0)', opacity:1}))
//       ])
//     ],{optional: true})  
//    ])
//   ])
// ]
export class InicioComponent implements OnInit {

  constructor( public listS :ListServiceService){}

  ngOnInit() {

    console.log(this.listS.Lists,'aqui');

  }

 
}
