import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Otros
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { OwlDateTimeModule, OwlNativeDateTimeModule  } from 'ng-pick-datetime';
 

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { environment } from 'src/environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';


// Services 
import { LoginService } from '../app/services/login.service';
import { AuthGuardService } from '../app/services/auth.guard.service';
import { UsersService } from '../app/services/users.service';
import { ListServiceService } from '../app/services/list-service.service';
import { TodosServicesService } from '../app/services/todos-services.service';
import {PushNotificationsService} from '../app/services/push-notifications.service';

// componentes
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ListCreatorComponent } from './list-creator/list-creator.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { TodosCreateComponent } from './todos-create/todos-create.component';
import { TodosCardComponent } from './todos-card/todos-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';
import {environment  } from '../environments/environment.prod';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    MenuComponent,
    FooterComponent,
    ListCreatorComponent,
    ListComponent,
    TodosCreateComponent,
    TodosCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    FormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AngularFirestore,LoginService,AuthGuardService,UsersService,ListServiceService,TodosServicesService,PushNotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
