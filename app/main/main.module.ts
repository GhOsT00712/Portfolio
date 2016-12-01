import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MainComponent} from './components/main.component'

@NgModule({
    imports:[BrowserModule],
    declarations:[MainComponent],
    exports:[MainComponent]
})

/**
 * MainModule
 */
export class MainModule {
   
}