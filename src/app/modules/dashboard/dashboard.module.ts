import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';

import { SharedModule } from "./../../shared/shared.module";

const routes: Route[] =[
  {path: "", component: DashboardComponent,
  children: [
    { path:'dashboard'  , loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)},
    {path: "remainder", loadChildren: () => import ('./remainder/remainder.module').then(m => m.RemainderModule)},
    {path: "trash", loadChildren: () => import ('./trash/trash.module').then(m => m.TrashModule)},
  ]
},
  
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
