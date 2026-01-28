import { Router } from "express";
import { submit_form } from "../controllers/form.controller.js";
import { validate } from "../middlewares/form.middlewares.js";


const form_router = Router();

form_router.post("/submit_form", validate, submit_form)


export {
    form_router
};