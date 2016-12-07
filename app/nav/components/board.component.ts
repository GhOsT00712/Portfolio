import {Component,OnInit} from '@angular/core';

import {BoardService} from '../services/board.service';
import {Iboard} from '../models/board';

@Component({
    selector:'[my-board]',
    templateUrl:"./app/nav/templates/board.template.html",
    providers:[BoardService]
})

export /**
 * BoardComponent
 */
class BoardComponent implements OnInit {
    boards:Array<Iboard>;
    constructor(private _boardService:BoardService){

    }

    ngOnInit(){
        this.boards= this._boardService.getBoards();
    }
}