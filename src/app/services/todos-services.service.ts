import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from 'angularfire2/firestore';
import { ITodo } from '../structures/todosCreate';
import { Observable } from 'rxjs/Rx';
import { share } from "rxjs/operators";
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class TodosServicesService {

  private collection : AngularFirestoreCollection<ITodo>;
  private ref : Observable<DocumentChangeAction<ITodo>[]>;
  private listId : string;

  constructor(private afs : AngularFirestore) { }

  setCollection(ListdId : string){
    this.listId = ListdId;
    this.collection = this.afs.collection('list')
                                                  .doc('lists')
                                                  .collection('todos',(ref)=>{
                                                    return ref.where('status','==',0)
                                                  })
    
    // this.ref = this.collection.snapshotChanges();
    // this.ref = this.todoCollection.snapshotChanges().pipe(share()); 
    this.ref = this.collection.snapshotChanges().pipe(share()); 

  }
  add(listId : string, todo : ITodo) : Promise<any>{
    if(!this.collection || this.listId != listId) this.setCollection(listId);
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    todo.createdAt = createdAt;
    return this.collection.add(todo);
  } 

  getFromsList(listId : string) : Observable<ITodo[]>{
    if(!this.collection || this.listId != listId) this.setCollection(listId);
      return this.ref.map(actions=>{
        return actions.map(item=>{
          const data = item.payload.doc.data() as ITodo;
           const id = item.payload.doc.id;
            return {...data, id};
        })
      })
  }

  updated(listId : string, todo: ITodo) : Promise<void>{
    if(!this.collection || this.listId != listId) this.setCollection(listId);
    return this.collection.doc(todo.id).update({status: todo.status});
  }

}
