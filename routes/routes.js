import { Router } from "../deps.js";
import { showBeanies, showGloves, showMasks } from "./controllers/controller.js";

const router = new Router();

router.get('/', showBeanies);

router.get('/gloves', showGloves)
      .get('/masks', showMasks)
      .get('/beanies', showBeanies);


export { router };