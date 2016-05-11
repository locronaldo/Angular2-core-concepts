import { Component,Input,Output,EventEmitter } from 'angular2/core';

@Component({
    selector: 'child',
    template: `<h3> I am a child component And I can communicate with my parent</h3>
                The advice of today is: <b>{{advice}}</b>  <br />
                <input [(ngModel)]="msg" /> 
                Time to notify my parent:) <button (click)="sendNotification(msg)"> notify!</button> ` 
})
export class ChildComponent  {
    @Input() advice: string; // I accept advice from my parent
    @Output() notifier = new EventEmitter<string>(); // I always notify him  to what's going on @ My school.  
    
    sendNotification(msg: string) {
        this.notifier.emit(msg);
    }
}