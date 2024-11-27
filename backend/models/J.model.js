import {Schema, model} from "mongoose";

const EsquemaJ = new Schema({
    name:String,
    appat:String,
    num: Number
})

export const ModeloJ =  new model("Tabla de Jugadores", EsquemaJ)


