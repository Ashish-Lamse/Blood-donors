import { Component, OnInit } from '@angular/core';
import {SearchService} from '../service/search.service';

@Component({
  selector: 'app-search',
  providers:[SearchService],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  donors=[];
  filteredArr=[];
  selectedCity;
  selectedBloodGroup;
  public cities:Array<string> = ['Hyderabad', 'Nagpur', 'Amravathi', 'Bhopal',
    'Indour'];

  public bloodGroups:Array<string> = ['A+', 'B+', 'AB+', 'AB-',
    'O+','O-','A-','B-'];

  constructor(private searchService:SearchService) { }

  public selectedCities(value:any):void {
    console.log('Selected value is: ', value);
    this.selectedCity=value.id;
  }
  public selectedBloodGroups(value:any):void {
    console.log('Selected value is: ', value);
    this.selectedBloodGroup=value.id;
  }

  public search(){
    this.filteredArr=[];
    this.donors.forEach((key: any) => {
      if((this.selectedBloodGroup && key.personal_details.blood_group===this.selectedBloodGroup) && (this.selectedCity && key.personal_details.city===this.selectedCity)){
        /*if(key.personal_details.blood_group===this.selectedBloodGroup || (this.selectedCity && key.personal_details.city===this.selectedCity)){*/
        this.filteredArr.push(key);
      }
    });
  }

  ngOnInit() {
    this.searchService.getBloodDonors().subscribe(donors=>{
      console.log("___donors",donors);
      this.donors=donors;
      this.filteredArr=donors;
    })
  }
}
