import { Component, OnInit } from '@angular/core';

// Router
import { ActivatedRoute } from '@angular/router';

// Otros
import { ITodo } from '../structures/todosCreate';
import { Observable, from } from 'rxjs';

// Services
import { TodosServicesService } from '../services/todos-services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public listId : string;

  public todos : Observable<ITodo[]>;

  trackTodoObjects = (id,obj) => obj.id;

  constructor(private router : ActivatedRoute, private TodoS : TodosServicesService){}

  ngOnInit() {
    this.listId = this.router.snapshot.params.id; 
    console.log(this.router.snapshot.params.id);
    
    this.todos = this.TodoS.getFromsList(this.listId);


    console.log(this.todos);

  }

}
