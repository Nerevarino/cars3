import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
    { path: '', component: CarsListComponent },
    { path: 'login', component: LogInComponent },
    { path: 'carinfo/:carId', component: CarInfoComponent },
    { path: 'registration', component: RegistrationComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
