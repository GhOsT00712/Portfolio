import {Component,OnInit} from '@angular/core';

import {Social} from '../models/social';
import {SocialService} from '../services/social.service';
@Component({
    selector:'[my-social]',
    templateUrl:'./app/nav/templates/social.template.html',
    providers:[SocialService]
})

export /**
 * SocialComponent
 */
class SocialComponent {
    socials:Array<Social>;
    constructor(private socialService:SocialService) {
        
    }

ngOnInit(){
 this.socials=this.socialService.getSocials();
}

}