import {Component,OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
         <h1>Interpolation</h1> 
            <p>Hello {{name}} </p>
           
         <h1>One way data binding</h1>
            <p  [style.background]="color" [innerText]="paragraph" >
            </p>
            A disabled input: <input type="text" [disabled]="isInputDisabled" />
            
         <h1>Some Event binding</h1>
            <button (click)=toggleDisabledProp()>Let's toggle the the disabled property</button>
            <p (mouseenter)="color = 'green'"  (mouseleave)="color = 'red'">Mouse events...</p>
         
         <h1>The famous two ways data binding</h1>
            <input  [(ngModel)]="name2" /> {{name2}}
    `,
})


export class AppComponent implements OnInit{
    name :string
    paragraph: string
    color  :string
    isInputDisabled :boolean
    
    constructor(){}
    ngOnInit() { 
        this.name = "Human Talks";
        this.color= "green";
        this.paragraph='This is an example to show that we can bind  easily component properties to any html attribute using the square braquets syntax';
        this.isInputDisabled= true;
    }    
    toggleDisabledProp(){
        this.isInputDisabled = !this.isInputDisabled;
    }
}