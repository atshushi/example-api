import { Router } from 'express';

type RouterDTO = {
  path: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
}

export default abstract class Controller {
  router: Router;

  constructor (options: RouterDTO, router: Router) {
    Object.assign(this, options);
    this.router = router;
  }
}
