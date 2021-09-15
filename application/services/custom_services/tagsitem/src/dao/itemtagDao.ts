import * as mongoose from 'mongoose';
import itemtagModel from '../models/itemtag';
import { CustomLogger } from '../config/Logger'


export class itemtagDao {
    private itemtag = itemtagModel;
    constructor() { }
    
    public async GpCreate(itemtagData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into itemtagDao.ts: GpCreate');

    let temp = new itemtagModel(itemtagData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from itemtagDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}