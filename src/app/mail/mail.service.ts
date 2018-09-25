import { Http,Headers,RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Mail } from './../model/mail';

@Injectable()
export class MailService {
URL = "http://localhost:18080/universalhaven-web/rest/mail";
//URL = "http://192.168.43.145:18080/universalhaven-web/rest/mail";
  constructor(private http:Http) { }
  sendmail(mail){
    return this.http.post(this.URL,mail);
  }
}
