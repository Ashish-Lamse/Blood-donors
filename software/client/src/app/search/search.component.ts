import { Component, OnInit } from '@angular/core';
import {SearchService} from '../service/search.service';

import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  donors=[];
  filteredArr=[];
  selectedCity;
  selectedBloodGroup;

  /*for pie chart */
  // Pie
  public pieChartLabels:string[] = ['A+', 'B+', 'A-','B-','AB+','AB-','O+','O-'];
  public pieChartData:number[] = [3, 2, 2, 5, 6, 0, 1, 1];
  public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }



/*cities*/
  public cities:Array<string> = ['Hyderabad', 'Nagpur', 'Amravati', 'Bhopal',
    'Indore'];

  public bloodGroups:Array<string> = ['A+', 'B+', 'AB+', 'AB-',
    'O+','O-','A-','B-'];

  constructor(private searchService:SearchService,private modal:Modal) { }

  public selectedCities(value:any):void {
    console.log('Selected value is: ', value);
    this.selectedCity=value.id;
  }
  public selectedBloodGroups(value:any):void {
    console.log('Selected value is: ', value);
    this.selectedBloodGroup=value.id;
  }
  //method will get call on select box clear
  public removedCity(value:any):void {
    this.selectedCity=undefined;
  }

  public removedBloodGroup(value:any):void {
    this.selectedBloodGroup=undefined;
  }

  public search(){
    console.log("search method is getting call");
    this.filteredArr=[];
    this.donors.forEach((key: any) => {
      if(this.selectedBloodGroup && this.selectedCity) {
        if(key.personal_details.blood_group===this.selectedBloodGroup && key.personal_details.city===this.selectedCity){
          this.filteredArr.push(key);
        }
      }
      else if(this.selectedBloodGroup && !this.selectedCity){
        if(key.personal_details.blood_group===this.selectedBloodGroup){
          this.filteredArr.push(key);
        }
      }else if(!this.selectedBloodGroup && this.selectedCity){
        if(key.personal_details.city===this.selectedCity){
          this.filteredArr.push(key);
        }
      }
      else {
        this.filteredArr=this.donors;
      }
    });
  }

  //method to render donor contact in pop up box
  displayContact(donorDetail){
    this.modal.alert()
      .showClose(true)
      .title('Contact Detail')
      .body(
        "<div class='text-center'><label>First Name :</label>"+donorDetail.personal_details.first_name+"<br>"+
        "<label>Last Name :</label>"+donorDetail.personal_details.last_name+"<br>"+
        "<hr>"+
        "<h3>Contact Detail</h3>"+
        "<h4>Personal</h4>"+
        "<label>Email :</label>"+donorDetail.contact_details.personal_contact_details.email+
        "<br><label>Phone :</label>"+donorDetail.contact_details.personal_contact_details.phone+
        "<h4>Emergency </h4>"+
        "<label>Email :</label>"+donorDetail.contact_details.emergency_contact_details.email+
        "<br><label>Phone :</label>"+donorDetail.contact_details.emergency_contact_details.phone+
        "</div>"
      )
      .open();
  }

  ngOnInit() {
    this.searchService.getBloodDonors().subscribe(donors=>{
      this.donors=donors;
      this.filteredArr=donors;
    })
  }
}
