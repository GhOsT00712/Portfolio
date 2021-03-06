import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {NavModule} from './nav/nav.module';
import {MainModule} from './main/main.module';

@NgModule({
  imports:      [ BrowserModule,NavModule,MainModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
