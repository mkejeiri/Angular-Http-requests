/**
 * since angular is a SPA (single page application), we shouldn't submit/leave our page
 * otherwise all the data get destroyed, that why angular through the custom services, 
 * use the built-in http service to fetch the data, this should be injected into 
 * our custom service, all of this is done async through observables, hence the need to subscribe!
 * also the map method (provided by 'rxj/RX' package) allow data transformation and the data wrapping up
 * in a new observable (created by map) which we should subscribe to, this allows
 * us to centralize data transformation in one place (our custom service!)... 
 */

import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  appName  = this.serverService.getAppName();
  constructor(private serverService:ServerService){}
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSave(){
    this.serverService.saveServers(this.servers)
    .subscribe(
      (response:Response)=>{
        console.log(response);
    },
    (error:Error) =>{
      console.log(error);
    });
  }
  // onGetServers(){
  //   this.serverService.getServers()
  //             .subscribe((response:Response)=>{
  //               // const data=response.json();
  //               // console.log(data);      
  //               this.servers = response.json();
                           
  //             },
  //             (error)=>{
  //               console.error(error);
  //             });
  // }

  onGetServers(){
    this.serverService.getServers()
              .subscribe((data : any[])=> {    
                this.servers = data;
              },
              (error)=>{
                console.error(error);
              });
  }
  ngOnInit(){
    // this.serverService.getAppName().
    // subscribe((data:string)=>{
    //   this.appName = data;
    // });
  }

}
