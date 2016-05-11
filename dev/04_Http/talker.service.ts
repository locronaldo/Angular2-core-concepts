import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http'; //1
import {Talker} from './Talker';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class TalkerService {
    
    constructor(private _http: Http) { 
        //2 the Http service has just been injected 
    }
  getVehicles() {
    return this._http.get('/dev/04_Http/talkers.json')
      .map((response: Response) => <Talker[]>response.json().data)
      .do(data => console.log(data))
      .catch(this.handleError);

  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
}