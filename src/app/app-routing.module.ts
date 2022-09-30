import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './character/list/list.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  // {path:'**', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'home', component: NavigationComponent, children:[
    {path: 'list', component: ListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
