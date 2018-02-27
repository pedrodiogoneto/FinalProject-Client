import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { AuthService } from './services/auth.service';

import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { HomepagePageComponent } from './pages/homepage-page/homepage-page.component';


const routes: Routes = [
  { path: '',  component: HomepagePageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'login',  component: LoginPageComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'signup',  component: SignupPageComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'logout',  component: AppComponent, canActivate: [ RequireUserGuardService] },

  // { path: 'page',  component: ... , canActivate: [ RequireUserGuardService ] },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    HomepagePageComponent
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
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
