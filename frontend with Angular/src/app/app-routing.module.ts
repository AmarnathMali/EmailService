import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { EmailComponent } from './component/email/email.component';
import { HomeComponent } from './component/home/home.component';


const routes:Routes = [
        {path:'send',component:EmailComponent},
        {path:'home',component:HomeComponent}
       
];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
