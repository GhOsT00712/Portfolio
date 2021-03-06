import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NavComponent} from './components/nav.component';
import {LogoComponent} from './components/logo.component';
import {BoardComponent} from './components/board.component';
import {SocialComponent} from './components/social.component';
@NgModule({
    imports:[BrowserModule],
    declarations:[NavComponent,LogoComponent,BoardComponent,SocialComponent],
    exports:[NavComponent]

})

/**
 * NavModule
 */
export class NavModule {
    
}