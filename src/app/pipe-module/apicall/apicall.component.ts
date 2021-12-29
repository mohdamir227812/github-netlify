import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/pipe-f/api-service.service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent implements OnInit {
  namesearch:any;
person:any;
  constructor(private _http:ApiServiceService) { }

  ngOnInit(): void {
    this._http.onapicall().subscribe(res=> this.person=res)
  }

}
