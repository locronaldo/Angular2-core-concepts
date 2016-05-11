import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router'; //1
import {OrganizerComponent} from './organizer.component';
import {TalkerComponent} from './talker.component';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES], //2
    providers: [ROUTER_PROVIDERS],    
    template: `
        <nav>
            <ul>
                <li><a [routerLink]="['Talkers']" href="">Talkers</a></li>
                <li><a [routerLink]="['Organizers']" href="">Organizers</a></li>
            </ul>
        </nav>
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
})
@RouteConfig([
  { path: '/talkers', name: 'Talkers', component: TalkerComponent, useAsDefault: true },
  { path: '/organizers', name: 'Organizers', component: OrganizerComponent }
 ])
export class AppComponent {

}

