//importo solo el enrutador desde el express
import { Router } from "express";
//inicio enrutado y lo almaceno en una constante
const router = Router();
//Crear rutas
router.get("/",(req,res) => res.render('home',{title:'Home'}));

export default router;