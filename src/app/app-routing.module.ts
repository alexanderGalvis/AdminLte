import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {
    path: 'admin', pathMatch: 'full', component: AdminComponent
  },
  /*{
    path: 'private',
    loadChildren:'./private/admin/admin.module#AdminModule',
    data: { name: 'Private' },
    canActivate: [ PrivateGuard ]
  },*/
  {path: '**', component: LoginComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
}
