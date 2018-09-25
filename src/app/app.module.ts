import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { MailModule } from './mail/mail.module';
import { MailRoutingModule } from './mail/mail-routing.module';
import { HttpModule } from '@angular/http';
import { AllRefugeesComponent } from './refugees/all-refugees/all-refugees.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr'
@NgModule({
  declarations: [
    AppComponent,
    AllRefugeesComponent,
    
  ],
  imports: [

    BrowserModule,

    SharedModule,
    RouterModule,
    AppRoutingModule,
    MailRoutingModule,
    MailModule,
    HttpModule,
    ToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
