import { Component, OnInit } from '@angular/core';
import {MainService} from '../services/main.service';

@Component({
    selector: '[my-intro]',
    templateUrl: './app/main/templates/intro.template.html',
})

export /**
 * IntroComponent
 */
    class IntroComponent implements OnInit {
     introHeadData:string;
    constructor(private mainService: MainService) {

    }

    ngOnInit() {
        this.introHeadData=this.mainService.getIntroHeadDetails();
    }
}