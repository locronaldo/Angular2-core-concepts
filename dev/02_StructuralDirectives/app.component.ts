import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Structural directives </h1>
         <ul>
              <li *ngFor="#talker of talkers">
                 <pre>
                     {{ talker | json}}
                 </pre>
              </li>  
         </ul>
         <p *ngIf="talkers.length>5"> <b>We have more than 5 speakers ! </b></p>
    `,
})
export class AppComponent {
    talkers= [
        {name : "Romain Pellerin", topic : "Continuous Delivery done right by leveraging Git"},
        {name : "Antoine Wacheux", topic : "Introduction à Rust"},
        {name : "Aladin Taleb", topic : "Faire communiquer une app iOS native avec un Webserver REST !"},
        {name : "Eric Gourlaouen", topic : "Django Rest Framework"},
        {name : "Pierre-Gilles Leymarie", topic : "Automatiser sa maison avec un Raspberry Pi et Gladys"},
        {name : "Merouane Harriga", topic: "The Core Concepts of Angular 2"}

    ]
    constructor(){
    }
}

