import express from 'express';
import { readdirSync } from 'fs';

const router: express.Router = express.Router();

const modulesPath = __dirname + '/../../modules/';
const modules = readdirSync(modulesPath);

modules.map((folder) => {
  const controllers = readdirSync(modulesPath + `${folder}/controllers`);

  controllers.map((fileName) => {
    const Controller = require(modulesPath + `${folder}/controllers/${fileName}`).default;
    const { method, path, execute } = new Controller(router);

    router[method](path, execute);
  });
});

export { router };
