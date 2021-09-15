import { Request, Response, NextFunction } from "express";
import { itemtagController } from '../controller/itemtagController';


export class Routes {
    private itemtag: itemtagController = new itemtagController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/itemtag').post(this.itemtag.GpCreate);
     }

}