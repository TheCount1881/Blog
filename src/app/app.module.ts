import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PanelComponent } from './components/panel/panel.component';

import { RouteGuard } from './components/auth/route-guard'
import { NotificationService } from './providers/notification.service';
import { NotificationComponent } from './components/notification/notification.component';
import { OwnFireService } from './providers/own-fire.service';
import { UserService } from './providers/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    PostsComponent,
    PanelComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    RouteGuard,
    NotificationService,
    OwnFireService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
