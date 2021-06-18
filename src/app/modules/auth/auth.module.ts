import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SigninModule } from "./signin/signin.module";
import { SignupModule } from "./signup/signup.module";
import { Route, RouterModule } from '@angular/router';

const routes: Route[] =[
  {path: "", component: AuthComponent,
  children: [
    {path: "signup", loadChildren: () => import ('./signup/signup.module').then(m => m.SignupModule)},
    {path: "signin", loadChildren: () => import ('./signin/signin.module').then(m => m.SigninModule)},
  ]
},
  
]

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
  CommonModule,
    SigninModule,
    SignupModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
