import {Component,OnInit} from '@angular/core';
import {IProject} from '../models/project';
import {MainService} from '../services/main.service';
@Component({
    selector:'[my-portfolio]',
    templateUrl:"./app/main/templates/portfolio.template.html"
})

export /**
 * PortfolioComponent
 */
class PortfolioComponent implements OnInit {
    description:string;
    projects:Array<IProject>
    constructor(private mainService:MainService) {
        
    }

    ngOnInit(){
     this.description ="Projects description..";
     this.projects= this.mainService.getProjects();
    }
}