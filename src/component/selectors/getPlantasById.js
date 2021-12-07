import {ListaPlantas} from '../data/ListaPlantas';

export const getPlantasById = ( id = '' ) =>{
    console.log("getPlantasById called");
    
    return ListaPlantas.find(planta=> planta.id === id);
}
