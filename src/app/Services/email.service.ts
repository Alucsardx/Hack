import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import gapi from 'gapi-client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

// import * as email from 'nativescript-email';
// import { compose } from "nativescript-email";
// import { compose as composeEmail } from "nativescript-email";


@Injectable()
export class EmailService{
  public link;
  constructor(private http: HttpClient){
    this.link = environment.EmailService;
  }


  UploadFIle(file: File, userInfo): Observable<any>{
    const formData = new FormData();
    formData.append(file.name, file);
    formData.append("info", userInfo);
    const uploadReq = new HttpRequest('POST', this.link, formData, {
      reportProgress: true,
    });

    
    // console.log(userInfo);
    this.http.post(environment.UserInfo, {UserInfo: userInfo.toString()}).subscribe(
      
    data=> {
      console.log(data)
      this.http.request(uploadReq).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          console.log(Math.round(100 * event.loaded / event.total));
        });
      }
    );

    
    

    return new Observable();
  }
}