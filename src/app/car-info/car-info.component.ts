import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { CarsmanagerService } from '../carsmanager.service'
import { fromEvent } from 'rxjs';


@Component({
    selector: 'app-car-info',
    templateUrl: './car-info.component.html',
    styleUrls: ['./car-info.component.css']
})

@Injectable()
export class CarInfoComponent implements OnInit {
    car;
    carslist;

    constructor(
        private route: ActivatedRoute,
        private carsmanager: CarsmanagerService
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {                           //Встроенный в angular observable, отвечающий за смену view
            this.car = this.carsmanager.getCarWith(+params.get('carId'));
        });

        //Настраиваем обработчики ввода данных по машине пользователем
        fromEvent(document.getElementById('horsePower'), 'input').subscribe(
            (event: KeyboardEvent) => { this.car.power = (event.target as HTMLInputElement).value; }
        );

        fromEvent(document.getElementById('MAP'), 'input').subscribe(
            (event: KeyboardEvent) => { this.car.location = (event.target as HTMLInputElement).value; }
        );
    }

    onUpdateCar() {     //Посылаем обновленные данные по машине через сервис
        this.carsmanager.updateCarData(this.car.power, this.car.location, this.car.id);
    }
}
