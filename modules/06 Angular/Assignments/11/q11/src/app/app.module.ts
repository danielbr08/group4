import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const appRoutes: Routes = [
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'sign-up/sign-up.component',      component: SignUpComponent },
  { path: "sign-in", component: SignInComponent },
  { path: '', redirectTo: 'sign-in'
   , pathMatch: 'full'
}
];



@NgModule({
  
  declarations: [
    AppComponent,
    SignInComponent,
    ForgotPasswordComponent,
    SignUpComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
