import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '', component: SigninComponent}
]

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
  CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    SigninComponent
  ]
})
export class SigninModule { }
