import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, Observable } from 'rxjs';
import { last } from 'rxjs/operators';



//В объекте этого сервиса хранятся и обрабатываются (в зависимости от событий приложения) основные данные этого приложения
//Наблюдение  ведется с помощью библиотеки rxjs
//По сути данный сервис как бы и представляет lificycle приложения
@Injectable({
    providedIn: 'root'
})
export class CarsmanagerService {
    observableCarsList;              //Наблюдаемый список машин, меняющий свое состояние в зависимости от событий
    carsListUpdateInterval = 5000;          //Переодичность перезагрузки списка машин с сервера
    carslist;

    constructor(private http: HttpClient) {
        console.log(`inside service constructor`);
        this.watchCarsList();                      //Начинаем отслеживать список машин
        this.watchCarParams();                     //Начинаем отслеживать изменение параметров какой-либо машины (изменил пользователь)
    }

    private watchCarsList() {                      //Функция организации наблюдения за состоянием списка машин
        this.observableCarsList = new Observable(observer => {
            timer(0, this.carsListUpdateInterval).subscribe(() => {    //Состояние списка меняется принудительно раз в интервал
                console.log(`requesting cars list`);
                this.http.get('/serve/?func=carslist').subscribe(data => {
                    console.log(`cars list received`);
                    observer.next(data);
                    this.carslist = data;
                });
            });


        });

    }

    private watchCarParams() {

    }

    public getObservableCarsList() {
        return this.observableCarsList;
    }

    public getCarWith(id) {
        for (let car of this.carslist.carslist) {
            if (car.id == id) { return car; } else { }
        }
    }

    public updateCarData(power, location, id) {
        this.http.get(`/serve/?func=carupdate&power=${power}&location=${location}&id=${id}`).subscribe(
            data => { console.log(data); }
        );
    }
}
