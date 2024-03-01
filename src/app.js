
import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/index.js';
import { port } from './config.js';


const app =express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname,'views'));



//configurar motor de plantillas
app.set('view engine','ejs');
app.set('views',join(__dirname,'views'));


//Enrutador
app.use(indexRoutes);
//configuramos public como static
app.use(express.static(join(__dirname,'public')));


//SERVIDOR
app.listen(process.env.PORT || port)
console.log("funciona")
console.log('Escuchando por el puerto '+port+'...')


