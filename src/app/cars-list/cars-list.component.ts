import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { share } from 'rxjs/operators';

@Component({
    selector: 'app-cars-list',
    templateUrl: './cars-list.component.html',
    styleUrls: ['./cars-list.component.css']
})

@Injectable()
export class CarsListComponent implements OnInit {
    dataObs;
    

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
	this.dataObs = this.http.get('/serve/?func=carslist');
    }

    // onGetCars(data) {
    // 	this.data = data;
    // 	console.log(data['carslist']);
    // }

}
