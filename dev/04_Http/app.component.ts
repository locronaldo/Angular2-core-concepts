import {Component, OnInit} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import {TalkerService } from './talker.service';
import {Talker} from './Talker';

@Component({
    selector: 'my-app',
    providers: [ HTTP_PROVIDERS, TalkerService],
    template: `
        <h1>Http and data</h1>
         <ul>
         {{httpError}}
              <li *ngFor="#talker of talkers">
                 <pre>
                     {{ talker | json}}
                 </pre>
              </li>  
         </ul>
         <p *ngIf="talkers && talkers.length>5"><b>This is an exceptional event because we have more than 5 speakers !</b> </p>
    `,
})
export class AppComponent implements OnInit {
    talkers: Talker[]
    httpError: string
    constructor(private _talkerService :TalkerService){
        
    }
    ngOnInit(){
        this._talkerService.getVehicles().subscribe( // we subscrive to our observable
            talkers => this.talkers = talkers, // succees
            error =>  this.httpError = <any>error // error
        );        

    }

}