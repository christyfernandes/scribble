import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '', component: SignupComponent}
]


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    SignupComponent
  ]
})
export class SignupModule { }
