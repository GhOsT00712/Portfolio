import {Component,OnInit} from '@angular/core';

import {LogoService} from '../services/logo.service';
import {ILogo} from '../models/logo';
@Component({
    selector:'[my-logo]',
    templateUrl:'./app/nav/templates/logo.template.html',
    providers:[LogoService]
})

/**
 * LogoComponent
 */
export class LogoComponent implements OnInit {
logo:ILogo

constructor(private _logoService:LogoService){

}

ngOnInit(){
    this.logo=this._logoService.getLogoDetails();
}


}