import { Router } from 'express';
import { MessagesController } from './controllers/MessagesController';
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
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update)

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes }
