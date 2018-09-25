import { Component, OnInit,ViewContainerRef ,ViewChild} from '@angular/core';
import { Mail } from '../../Model/mail';
import { MailService } from '../mail.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  mail :Mail =new Mail();
  testmail
  problemMail
  constructor(private service:MailService) { 
     this.testmail =false;
     this.problemMail =false;
  }
  ngOnInit() {
   
  }
  sendMail(){

      if(this.mail.mailSender == undefined || this.mail.subject == undefined || this.mail.content == undefined){
        this.problemMail=true;
        this.testmail=false;
      } 
      else{
        this.service.sendmail(this.mail).subscribe(rslt => {
      this.testmail=true;
      this.problemMail=false;
    });
      } 
    
  }
}
