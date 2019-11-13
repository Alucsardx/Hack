import { Injectable } from '@angular/core';
import * as email from 'nativescript-email';
import { compose } from "nativescript-email";
import { compose as composeEmail } from "nativescript-email";


@Injectable()
export class EmailService{
    constructor(){
      
    }

    public SendEmail(){
        email.available().then(available => {
            console.log(available);
        }).catch(error => {
            console.log(error);
        })
    }
}