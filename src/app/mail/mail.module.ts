import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from '../mail/contactus/contactus.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MailService } from '../mail/mail.service';
import { CustomFormsModule } from 'ng2-validation';
@NgModule({
  imports: [
    CommonModule,
    
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, FormsModule, CustomFormsModule
  
  ],
  declarations: [ContactusComponent ],
  exports : [ContactusComponent ],
  providers : [MailService]
})
export class MailModule { 
  
}
