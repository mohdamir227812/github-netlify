import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.css']
})
export class FilterPipeComponent implements OnInit {



  
  urls="https://jsonplaceholder.typicode.com/comments";

  objectname:any;
  getfunction(): Observable<any>{
   return this._http.get(this.urls)
  }
  deletedata(ind:any){
       this.objectname.splice(ind, 1)
  }

  constructor( private _http:HttpClient) { 
  
  }

  ngOnInit(): void {

    this.getfunction().subscribe(res =>{
      this.objectname =  res.map((obj:any) => obj)
            console.log(this.objectname)
        })
        
        
  }

}
