import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';


const routes = Router();

/*
*TIPOS DE PARÂMETROS
    *Routes Params => Parâmetros de rotas localhost:3000/settings/1

    *Query Params => Filtros e buscas localhost:3000/settings/1?search=algumacoisa

    *Body Params => Parâmetros do corpo da requisição {
        objetos dentro das requisições
    }
*/
const settingsController = new SettingsController();
const usersController = new UsersController();

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);

export { routes }