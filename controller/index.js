import Router from "express-promise-router";
import helloController from "./hello.controller.js";


const router = new Router();


router.use("/", helloController);


export default router;