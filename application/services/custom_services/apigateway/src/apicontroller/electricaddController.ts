import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class electricaddController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/electricadd', this.GpGetAllValues);
this.router.get('/electricadd/get/search', this.GpSearch);
this.router.post('/electricadd', this.GpCreate);
    }

public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into electricaddController.ts: GpGetAllValues');
        new ApiAdaptar().get(Constant.ITEMTAGLISTURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from electricaddController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into electricaddController.ts: GpSearch');
        new ApiAdaptar().get(Constant.ITEMTAGLISTURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from electricaddController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into electricaddController.ts: GpCreate');
        new ApiAdaptar().post(Constant.ITEMTAGLISTURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from electricaddController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }




}
