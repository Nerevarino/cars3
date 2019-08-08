import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { LogInComponent } from './log-in/log-in.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    declarations: [
        AppComponent,
        CarsListComponent,
        TestCompComponent,
        LogInComponent,
        CarInfoComponent,
        RegistrationComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
