import { Request, Response, NextFunction } from "express";
import { electricaddController } from '../controller/electricaddController';


export class Routes {
    private electricadd: electricaddController = new electricaddController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/electricadd').get(this.electricadd.GpGetAllValues);
app.route('/electricadd/get/search').get(this.electricadd.GpSearch);
app.route('/electricadd').post(this.electricadd.GpCreate);
     }

}