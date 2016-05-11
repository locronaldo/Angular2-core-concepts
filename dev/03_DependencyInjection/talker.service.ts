import { Injectable } from 'angular2/core';

@Injectable()
export class TalkerService {
    getTalkers = ()=> [
        {name : "Romain Pellerin", topic : "Continuous Delivery done right by leveraging Git"},
        {name : "Antoine Wacheux", topic : "Introduction à Rust"},
        {name : "Aladin Taleb", topic : "Faire communiquer une app iOS native avec un Webserver REST !"},
        {name : "Eric Gourlaouen", topic : "Django Rest Framework"},
        {name : "Pierre-Gilles Leymarie", topic : "Automatiser sa maison avec un Raspberry Pi et Gladys"},
        {name : "Merouane Harriga", topic: "The Core Concepts of Angular 2"}
    ]
        
    constructor() { }

}
