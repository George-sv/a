import { Injectable } from '@angular/core';


// firebase
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { LoginService } from '../services/login.service';
import * as firebase from 'firebase/app';


// Strutur
import { ListCreade } from '../structures/List';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  public uid : string;
  public listsCollection : AngularFirestoreCollection<ListCreade>;
  public Lists : Observable<ListCreade[]>;


  constructor(
    public afs : AngularFirestore,
    public auth : LoginService  
    ){
      this.auth.getUser().subscribe(user =>{
        this.uid = user.uid;
        if(this.uid) this.sertCollection();
      })
    }

    sertCollection(){
      this.listsCollection = this.afs.collection('users').doc(this.uid).collection<ListCreade>('lists');

      this.Lists = this.listsCollection.snapshotChanges().map(actions=>{
        // console.log(this.Lists);
        return actions.map( item=>{
          const data = item.payload.doc.data() as ListCreade; 
            const id = item.payload.doc.id;

            return {...data, id};
        })

      })
    }
    add(list : ListCreade) : Promise<any>{
      if(!this.listsCollection) throw Error('Set a collection before to add a new document');
      
      const createList = firebase.firestore.FieldValue.serverTimestamp();

      list.createList = createList;

      return this.listsCollection.add(list);

    }   
}
