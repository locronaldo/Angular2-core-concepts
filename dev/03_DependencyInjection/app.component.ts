import {Component, OnInit} from 'angular2/core';
import {TalkerService} from './talker.service'; //1

@Component({
    selector: 'my-app',
    providers : [TalkerService], //2 
    template: `
        <h1>Services and Dependecy Injection</h1>
         <ul>
              <li *ngFor="#talker of talkers">
                 <pre>
                     {{ talker | json}}
                 </pre>
              </li>  
         </ul>
         <p *ngIf="talkers.length>5"><b>This is an exceptional event because we have more than 5 speakers !</b> </p>
    `,
})
export class AppComponent  implements OnInit{
    talkers :any[]; // This is fine but we  will improve it in the Http example
    constructor(private talkerService :TalkerService){  //3 implicitly set a private talkerService for you :)

        
    } 
    ngOnInit(){
          this.talkers = this.talkerService.getTalkers();
    }
  

}