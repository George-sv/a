import { Component, OnInit, Input } from '@angular/core';

// 
import { ITodo, TStatus } from '../structures/todosCreate';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TodosServicesService } from '../services/todos-services.service';

import * as moment from 'moment';
// moment.locale('es');
 
@Component({
  selector: 'app-todos-card',
  templateUrl: './todos-card.component.html',
  styleUrls: ['./todos-card.component.css'],
  animations: [
    trigger('statusAnimation',[
      state('0,void',style({
        transform:'translateX(0)',
        opacity:1
      })),
      state('1',style({
        transform:'translateX(-100%)',
        opacity:0
      })),
      transition('0 <=> 1',[
        animate(200,style({transform:'translateX(0)', opacity:1})),
        animate(200)
      ])
    ]),
    trigger('pressAnimation',[
      state('up,void',style({
        transform:'translateX(0)'
      })),
      state('down',style({
        transform:'translatex(-100px)'
      })),
      transition('up <=> down',[
        animate(100,style({ transform:'translateX(0)'})),
        animate(100)
      ])
    ])
  ]
})
export class TodosCardComponent implements OnInit {

  @Input() todo : ITodo;
  @Input() listId : string;

  public press : string = 'up';

  public moment : any = moment;

  constructor(private todoS : TodosServicesService) { }

  ngOnInit() {
  }
  completed(){
    console.log(':D Swippeeeeeee ');

    this.todo.status = TStatus.Completed;

    setTimeout(()=>this.todoS.updated(this.listId,this.todo),400);
    
  }

}
