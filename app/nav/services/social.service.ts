import{Injectable} from '@angular/core';

import {Social} from '../models/social';

@Injectable()
export /**
 * SocialService
 */
class SocialService {

    private _social:Array<Social>;

    /**
     * getSocials
     */
    public getSocials() {
        this._social=[
            {nameId:'facebook',name:'Facebook',link:'#'},
            {nameId:'github',name:'Github',link:'#'},
            {nameId:'envelope',name:'Email',link:'#'}
        ]

        return this._social;
    }
    
}