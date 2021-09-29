import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserController} from "./controllers/ListUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import {  ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagController } from "./controllers/ListTagController";


const router = Router();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const createTagController = new CreateTagController();
const autheticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendController();
const listUserReceiveComplimentsController = new ListUserReceiveController();
const listTagsController = new ListTagController();




router.post("/users",createUserController.handle);

router.get("/users", ensureAuthenticated, listUserController.handle);

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);

router.get("/tags", ensureAuthenticated, listTagsController.handle);

router.post("/login", autheticateUserController.handle);

router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/user/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);

router.get("/user/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);

export { router };