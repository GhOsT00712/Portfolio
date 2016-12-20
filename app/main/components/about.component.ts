import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
    selector: '[my-about]',
    templateUrl: "./app/main/templates/about.template.html"
})

export /**
 * AboutComponent
 */

    class AboutComponent implements OnInit {
    private aboutImage: string;
    private aboutDescription: string;

    constructor(private mainService: MainService) {

    }

    ngOnInit() {
        let arr = this.mainService.getAboutDetails();
        this.aboutImage = arr[0];
        this.aboutDescription = arr[1];
    }
}