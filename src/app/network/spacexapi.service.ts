import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';


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

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  repoImgs!:[string];
  constructor(private http: HttpClient) { }


  fetchAll(){
    console.log('fetchAll called');
    return this.http.get('https://api.spacexdata.com/v3/launches')
    .subscribe(result => {
      console.log(result);
    });
  }
}
