import { Injectable } from '@angular/core';

import {IProject} from '../models/project';
@Injectable()
export /**
 * MainService
 */
    class MainService {

    public getIntroHeadDetails(): string {

        return `<h2 class="alt">Hi! I'm <strong>007</strong>, <a href="#">secret</a> agent<br /> in MI6.</h2>
                <p>working for Natonal Secret Service<br /> and a Play toy.</p>`;

    }

    public getProjects():Array<IProject>{
        let  projects:Array<IProject>=[
            {id:1,description:"Hello1",title:"Project1"},
            {id:2,description:"Hello2",title:"Project2"},
            {id:3,description:"Hello3",title:"Project3"}
        ]

        return projects;
    }

    public getAboutDetails():Array<string>{
        let image:string="images/pic08.jpg";
        let details:string="Details about me..";

        return [image,details];
    }
}