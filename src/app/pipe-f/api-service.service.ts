import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _https:HttpClient) { }

  onapicall(){
    return this._https.get("https://jsonplaceholder.typicode.com/comments")
  }


}
