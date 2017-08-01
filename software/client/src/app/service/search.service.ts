import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';


@Injectable()
export class SearchService {
  newData=[];
  constructor(private http:Http) {
  }
  //get donors list
  getBloodDonors():Observable<any>{
    const url="../../assets/donor.json";
    //noinspection TypeScriptUnresolvedFunction
    return this.http.get(url).map(
      res=>{
        const data=res.json();
        return data.concat(this.newData);
      }
    )
  }

  //adding new donor to the list of donor array
  addNewDonor(newDonor){
    this.newData.push(newDonor);
  }
}
