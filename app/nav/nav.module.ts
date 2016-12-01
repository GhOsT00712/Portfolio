import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NavComponent} from './components/nav.component'

@NgModule({
    imports:[BrowserModule],
    declarations:[NavComponent],
    exports:[NavComponent]
})

/**
 * NavModule
 */
export class NavModule {
    
}