import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {HomeComponent} from '../app/main/home.component';
import {HomeService} from '../app/main/home.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,HomeComponent],
  providers:[HomeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
