import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashComponent } from './trash.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '', component: TrashComponent }
]

@NgModule({
  declarations: [
    TrashComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    TrashComponent
  ]
})
export class TrashModule { }
