
import { HomepageComponent } from './shared/homepage/homepage.component';
import { ContactusComponent } from './mail/contactus/contactus.component';

import {  Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: 'home', component: HomepageComponent }

];
@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports:[
      RouterModule
    ]
})
export class AppRoutingModule { }
