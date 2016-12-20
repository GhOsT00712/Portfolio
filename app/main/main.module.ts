import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MainComponent} from './components/main.component'
import {IntroComponent} from './components/intro.component';
import {PortfolioComponent} from './components/portfolio.component';
import {AboutComponent} from './components/about.component';
import {MainService} from './services/main.service';
@NgModule({
    imports:[BrowserModule],
    declarations:[MainComponent,IntroComponent,PortfolioComponent,AboutComponent],
    exports:[MainComponent],
    providers:[MainService]
})

/**
 * MainModule
 */
export class MainModule {
    
   
}