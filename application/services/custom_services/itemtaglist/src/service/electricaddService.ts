import { Request, Response } from 'express';
import {electricaddDao} from '../dao/electricaddDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let electricadd = new electricaddDao();

export class electricaddService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into electricaddService.ts: GpGetAllValues')
     
     electricadd.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from electricaddService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into electricaddService.ts: GpSearch')
     let  electricaddData = req.query;
     electricadd.GpSearch(electricaddData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from electricaddService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into electricaddService.ts: GpCreate')
     let  electricaddData = req.body;
     electricadd.GpCreate(electricaddData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from electricaddService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}