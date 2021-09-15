import { Request, Response } from 'express';
import { itemtagService } from '../service/itemtagService';
import { CustomLogger } from '../config/Logger'
let itemtag = new itemtagService();

export class itemtagController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
itemtag.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into itemtagController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from itemtagController.ts: GpCreate');
    })}


}