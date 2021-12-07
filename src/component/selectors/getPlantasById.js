import {ListaPlantas} from '../data/ListaPlantas';

export const getPlantasById = ( id = '' ) =>{
    
    return ListaPlantas.find(planta=> planta.id === id);
}
