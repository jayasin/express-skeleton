import Router from "express-promise-router";
const router = new Router();


router.get("/", (req, res) => {
    res.status(200).send({message: "Hello World"});
});


export default router;