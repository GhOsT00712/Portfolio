import {Injectable,Inject} from '@angular/core';

import {ILogo} from '../models/logo';

 /**
 * LogoService
 */
@Injectable()
export class LogoService {
     private _logo:ILogo;

/**
 * getLogoDetails
 */
public getLogoDetails():ILogo {
    this._logo={
        Name:"Piyush Dubey",
        Image:"./images/image.png",
        Role:"Software Developer"
    }


    return this._logo;
}

}