import { ListaPlantas } from "../data/ListaPlantas"


export const getPlantasByFamilia = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if( !validPublishers.includes( publisher ) ) {
        throw new Error( `${ publisher } is not a valid publisher` );
    }

    return ListaPlantas.filter( Plantas => Plantas.publisher === publisher );
}