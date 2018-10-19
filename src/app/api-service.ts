import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export  class  APIService {
  constructor(private  httpClient:  HttpClient) {}
  getComplaint(){
      return  this.httpClient.get('http://localhost:3000/track');
  }

  sendComplaint(xx){
    return  this.httpClient.post('http://localhost:3000/submit',xx);
}

}
