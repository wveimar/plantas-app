import { ListaPlantas } from '../data/ListaPlantas';


export const getPlantasByName = ( name = '') => {
    
    console.log('getHeroesByName called');

    if ( name.length === 0 ) {
        return [];
    }

    name = name.toLowerCase();
    return ListaPlantas.filter(plantas => plantas.nombre.toLowerCase().includes(name));

}