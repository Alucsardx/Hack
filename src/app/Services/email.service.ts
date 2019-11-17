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
    var info = JSON.stringify(userInfo);
    formData.append("userInfo", info);
    const uploadReq = new HttpRequest('POST', this.link, formData, {
      reportProgress: true,
    });
    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        console.log(Math.round(100 * event.loaded / event.total));
    });
    this.http.post(this.link, userInfo).subscribe(event => console.log(event));

    return new Observable();
  }
}