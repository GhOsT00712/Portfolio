import {NgModule} from '@angular/core';
import {BrowserModule,} from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import {MainComponent} from './components/main.component'
import {IntroComponent} from './components/intro.component';
import {PortfolioComponent} from './components/portfolio.component';
import {AboutComponent} from './components/about.component';
import {MainService} from './services/main.service';
import {ContactComponent} from './components/contact.component';
@NgModule({
    imports:[BrowserModule,FormsModule,ReactiveFormsModule],
    declarations:[MainComponent,IntroComponent,PortfolioComponent,AboutComponent,ContactComponent],
    exports:[MainComponent],
    providers:[MainService]
})

/**
 * MainModule
 */
export class MainModule {
    
   
}