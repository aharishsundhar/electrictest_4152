import { Request, Response } from 'express';
import {itemtagDao} from '../dao/itemtagDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let itemtag = new itemtagDao();

export class itemtagService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into itemtagService.ts: GpCreate')
     let  itemtagData = req.body;
     itemtag.GpCreate(itemtagData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from itemtagService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}