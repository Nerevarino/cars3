import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CarsmanagerService } from '../carsmanager.service'
import { Observable } from 'rxjs';
// import { share } from 'rxjs/operators';

@Component({
    selector: 'app-cars-list',
    templateUrl: './cars-list.component.html',
    styleUrls: ['./cars-list.component.css']
})

@Injectable()
export class CarsListComponent implements OnInit {
    dataObs: Observable<any>;


    constructor(private carsmanager: CarsmanagerService) {

    }

    ngOnInit() {
        this.dataObs = this.carsmanager.getObservableCarsList();
    }

}
