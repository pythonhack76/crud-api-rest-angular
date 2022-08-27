import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.css']
})
export class ServiziComponent implements OnInit {
  servizi = this._formBuilder.group({
    sitoweb: false,
    landing: false,
    carrello: false,
    app: false

  });
  constructor(private _formBuilder: FormBuilder) {

    //private route: ActivatedRoute; 
   }

  ngOnInit(): void {
  }

}
