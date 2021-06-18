import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent
  ],
  imports: [
  CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SideMenuComponent
  ]
})
export class SharedModule { }
