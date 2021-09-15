import { Request, Response } from 'express';
import { electricaddService } from '../service/electricaddService';
import { CustomLogger } from '../config/Logger'
let electricadd = new electricaddService();

export class electricaddController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
electricadd.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into electricaddController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from electricaddController.ts: GpGetAllValues');
    })}
public GpSearch(req: Request, res: Response) {
electricadd.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into electricaddController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from electricaddController.ts: GpSearch');
    })}
public GpCreate(req: Request, res: Response) {
electricadd.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into electricaddController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from electricaddController.ts: GpCreate');
    })}


}