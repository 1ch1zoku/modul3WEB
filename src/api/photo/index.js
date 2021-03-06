import {Router} from "express";
import photoControler from "./controller";

const photoRouter = new Router();
photoRouter.get("/", photoControler.get);
photoRouter.post("/", photoControler.post);

export default photoRouter;