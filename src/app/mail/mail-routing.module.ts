
import {  Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactusComponent } from './contactus/contactus.component';

const appRoutes: Routes = [

    { path:"contactus",component: ContactusComponent}
 
];
@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class MailRoutingModule { }
