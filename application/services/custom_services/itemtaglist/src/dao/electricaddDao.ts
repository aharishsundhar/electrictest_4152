import * as mongoose from 'mongoose';
import electricaddModel from '../models/electricadd';
import { CustomLogger } from '../config/Logger'


export class electricaddDao {
    private electricadd = electricaddModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into electricaddDao.ts: GpGetAllValues');

    

    
    
    
    this.electricadd.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from electricaddDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(electricaddData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into electricaddDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(electricaddData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.electricadd.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from electricaddDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(electricaddData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into electricaddDao.ts: GpCreate');

    let temp = new electricaddModel(electricaddData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from electricaddDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}