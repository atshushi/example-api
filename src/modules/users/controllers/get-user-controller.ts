import { Router, Request, Response } from 'express';

import Controller from '@core/domain/Controller';

export default class extends Controller {
  constructor (router: Router) {
    super({
      path: '/users',
      method: 'get',
    }, router);
  }

  execute (request: Request, response: Response): Response {
    return response.status(200).json({
      username: 'Shushi',
      email: 'atsushithesushi@gmail.com',
      discord: 'shushi#1245',
    });
  }
}
