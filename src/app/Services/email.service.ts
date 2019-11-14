import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import gapi from 'gapi-client';

// import * as email from 'nativescript-email';
// import { compose } from "nativescript-email";
// import { compose as composeEmail } from "nativescript-email";


@Injectable()
export class EmailService{
    constructor(private http: HttpClient){
      
    }

    public UploadFIle(file){
        return this.http.post("https://www.googleapis.com/drive/v3/files?key=AIzaSyDHtPwW9QH2wOnB6AslzNTzWNqgnmaj_rY", file);
    }

    auth(){
        //On load, called to load the auth2 library and API client library.
        gapi.load('client:auth2', initClient);
            
        // Initialize the API client library
        function initClient() {
          gapi.client.init({
            discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
            clientId: 'AIzaSyDHtPwW9QH2wOnB6AslzNTzWNqgnmaj_rY',
            scope: 'https://www.googleapis.com/auth/drive.metadata.readonly'
          }).then(function () {
            // do stuff with loaded APIs
            console.log('it worked');
          });
        }
    }
}