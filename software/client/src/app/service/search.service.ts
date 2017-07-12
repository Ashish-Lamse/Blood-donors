import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';


@Injectable()
export class SearchService {

  constructor(private http:Http) { }
  //get donors list
  getBloodDonors():Observable<any>{
    const url="../../assets/donor.json";
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get(url).map(
      res=>{
        const data=res.json();
        console.log('git service__',data);
        return data;
      }
    )
  }
}
