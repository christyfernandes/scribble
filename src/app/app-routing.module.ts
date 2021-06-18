import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  
   
      // {path: "", loadChildren: () => import ('./modules/auth/auth.module').then(m => m.AuthModule)},
      // {path: "", loadChildren: () => import ('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
