import { Component, OnInit, Input } from '@angular/core';

// struturas
import { ITodo, TStatus} from '../structures/todosCreate';

// services 
import { TodosServicesService } from '../services/todos-services.service';
// otros
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-todos-create',
  templateUrl: './todos-create.component.html',
  styleUrls: ['./todos-create.component.css'],
  animations:[
    trigger('openClose',[
      state('collapsed,void', style({height:'0px'})),
      state('expanded', style({height:'*'})),
      transition('collapsed<=> expanded', [animate(300,style({height:'*'})),animate(300)])
    ])
  ]
})
export class TodosCreateComponent implements OnInit {

  @Input() id : string;

  public formState : string = 'collapsed';

  public todo : ITodo= {content: "", status: TStatus.Created };

  constructor( private todoS : TodosServicesService ){}

  ngOnInit(){}

  save(){
    console.log(this.id);
    this.todoS.add(this.id,this.todo).then((r)=>{
      this.todo = {content:'', descripcion: null, status: TStatus.Created}
    })
  
  }
  label(){
    return (this.formState == 'collapsed') ? 'Add new task' : 'Close Form'
  }
  toggleForm(){
    this.formState = (this.formState == 'collapsed') ? 'expanded' : 'collapsed';
  }


}
