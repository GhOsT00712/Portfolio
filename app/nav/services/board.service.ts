import {Injectable} from '@angular/core';

import {Iboard} from '../models/board';

@Injectable()

export /**
 * BoardService
 */
class BoardService {

    private _boards:Array<Iboard>;

    /**
     * getBoards
     */
    public getBoards():Array<Iboard> {

       this._boards= new Array<Iboard>(
           {id:"top",faIcon:"home",heading:"Intro"},
           {id:"portfolio",faIcon:"th",heading:"Portfolio"},
           {id:"about",faIcon:"user",heading:"About me"},
           {id:"contact",faIcon:"envelope",heading:"Contact"}
       );

        return this._boards;
        
    }
}