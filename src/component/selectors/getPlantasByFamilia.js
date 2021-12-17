import { ListaPlantas } from "../data/ListaPlantas"


export const getPlantasByFamilia = ( familia ) => {

     const validPublishers = ['1', '2'];
     console.log(validPublishers);
     console.log(familia);
    // if( !validPublishers.includes( familia ) ) {
    //     throw new Error( `${ familia } is not a valid publisher` );
    // }

    return ListaPlantas.filter( Plantas => Plantas.familia === familia );
}