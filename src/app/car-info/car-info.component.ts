import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cars } from '../cars';

@Component({
    selector: 'app-car-info',
    templateUrl: './car-info.component.html',
    styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {
    car;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.car = cars[+params.get('carId')];
        });
    }

}
