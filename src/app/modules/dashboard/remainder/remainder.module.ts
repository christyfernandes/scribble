import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemainderComponent } from './remainder.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '', component: RemainderComponent }
]


@NgModule({
  declarations: [
    RemainderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RemainderComponent
  ]
})
export class RemainderModule { }
