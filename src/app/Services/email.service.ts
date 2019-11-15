import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import gapi from 'gapi-client';
import { environment } from 'src/environments/environment';

// import * as email from 'nativescript-email';
// import { compose } from "nativescript-email";
// import { compose as composeEmail } from "nativescript-email";


@Injectable()
export class EmailService{
  public link = "";
  constructor(private http: HttpClient){
    this.link = environment.EmailService;
  }

  public UploadFIle(file){
      return this.http.post(this.link, file);
  }
}