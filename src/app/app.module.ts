// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Services
import { AdminService } from './services/admin.service';
import { AuthenticationService } from './services/authentication.service';
import { CookieService } from './services/cookie.service';
import { FileuploadService } from './services/fileupload.service';
import { FormService } from './services/form.service';
import { SocketioService } from './services/socketio.service';
import { UserService } from './services/user.service';

// Components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
