import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ServerService {

  constructor(private http:Http) { }

/**
 * since we use google 'firebase' as a back-end:
 *  post request: will append to the existing elements in the DB
 *  put request : will overwrite the existing elements in the DB
 */
  saveServers(servers:any[]):Observable<Response>{   
      /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
      *                      W A R N I N G
      * 
      *  This statement enables angular to create a buit-in observable behind the scenes,
      *  this observable wraps our request, but not sending the data (request) YET!!!.
      *  so the request won't be sent unless we subscribe to this observable.
      *  we could subscribe here but we prefer to subscribe in the app componenet!
      *  here we simply return an observable instead.
      * https://http-demo-17d54.firebaseio.com/data.json is firebase spec!!!
      * Hearders : "content-type","application/json";
      * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

     
    const header = new Headers({'Content-Type':'application/json'}); //this the default
    // return this.http.post('https://http-demo-17d54.firebaseio.com/data.json',servers,{headers:header}); 
   return this.http.put('https://http-demo-17d54.firebaseio.com/data.json',servers,{headers:header});
  }

  // getServers():Observable<Response>{
  //   return this.http.get('https://http-demo-17d54.firebaseio.com/data.json');
  // }

  /**
   * in case we use this service to get formatted data for multiple components.
   * to avoid 'DRY' the 'map' method come in handy!!!, it will transform the data and 
   * wrap it into a new observable!!! 
   * need to unlock 'rxjs/Rx' package though : import 'rxjs/Rx';
   */
  getServers(){
    return this.http.get('https://http-demo-17d54.firebaseio.com/data.json')
                .map((response:Response) => {
                  const servers = response.json();
                  for(const server of servers){
                    server.name = "fetched_FireBase_Data: " + server.name;
                  }
                  return servers;
                })
                .catch((error:Response) =>{
                  console.log(error);
                  // return Observable.throw(error);
                  /**
                   * here we could centralize the error handling!!!
                   */
                  return Observable.throw('something went wrong');
                });
  }
  // getAppName():Observable<string>{
  getAppName(){    
    return this.http.get('https://http-demo-17d54.firebaseio.com/appName.json')
    .map((response:Response)=>{
      return response.json();
    });
  }

}
