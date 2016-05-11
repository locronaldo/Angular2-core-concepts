import {Component} from 'angular2/core';
import {ChildComponent} from './child/child.component';

@Component({
    selector: 'my-app',
    directives: [ChildComponent], // I can now have a child component inside my hirearchy 
    template: ` <h1>I am the root component and I have a Child </h1>
             <ul>
              <li *ngFor="#msg of childMessages">            
                    Child notification:  {{msg}}                 
              </li>  
         </ul>
        <child [advice]="rootAdvice" (notifier)=getNotification($event)></child>
    `,
})
export class AppComponent {
    rootAdvice: string;
    childMessages: string[]= [];
    
    constructor(){
        this.rootAdvice="Don't eat too much !";
    }
    getNotification(msg?: string) {
        if (msg) {
            this.childMessages.push(msg);
        }
    }

}