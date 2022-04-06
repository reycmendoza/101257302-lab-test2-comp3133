import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class missionList {
  constructor(
    public mission_name: string,
    public launch_year:number,
    public details: string,
    public mission_patch_small: string,
    public rocket: {
      rocket_name: string
      rocket_type: string
    },
    public launch_site: {
      site_name_long: string
    }
  ){}
}

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  mission_list!: missionList[];

  constructor(
    private httpClient: HttpClient
  ){ } 

  ngOnInit(): void {
   this.getLists();
  }

  getLists(){
    this.httpClient.get<any>('https://api.spacexdata.com/v3/launches').subscribe(
      response => {
        this.mission_list = response;
    });
  }

}
