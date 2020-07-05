import { Component, OnInit } from '@angular/core';

// 
import { ListCreade } from '../structures/List';
import { ListServiceService } from '../services/list-service.service';

@Component({
  selector: 'app-list-creator',
  templateUrl: './list-creator.component.html',
  styleUrls: ['./list-creator.component.css']
})
export class ListCreatorComponent implements OnInit {

  public list : ListCreade = { title : '' }

  constructor(private listS : ListServiceService) { }

  ngOnInit() {
  }

  save(){
    console.log(this.list);
    this.listS.add(this.list).then((result) =>{
      this.list.title = '';
    });
  }

}
