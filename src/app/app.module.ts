import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { AuthService } from './services/auth.service';
import { TasksService } from './services/tasks.service';

import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { HomepagePageComponent } from './pages/homepage-page/homepage-page.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { TaskCardComponent } from './components/task-card/task-card.component';


const routes: Routes = [
  { path: '',  component: HomepagePageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'login',  component: LoginPageComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'signup',  component: SignupPageComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'logout',  component: AppComponent, canActivate: [ RequireUserGuardService] },
  { path: 'tasks-list',  component: TasksPageComponent, canActivate: [ RequireUserGuardService] },

  // { path: 'page',  component: ... , canActivate: [ RequireUserGuardService ] },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    LoginPageComponent,
    SignupPageComponent,
    HomepagePageComponent,
    TasksPageComponent,
    TaskCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AuthService,
    TasksService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
