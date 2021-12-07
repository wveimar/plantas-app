import {useMemo} from "react";
import { PlantaCard } from "./PlantaCard";
import {getPlantasByFamilia} from '../selectors/getPlantasByFamilia';


export const ResultadoPlantas = ({ publisher }) => {
    const plantas = useMemo(()=> getPlantasByFamilia(publisher),[publisher]);
    
    
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                plantas.map(plantas => (
                    <PlantaCard
                    key={plantas.id}
                        {...plantas}
                  />
                ))
            }
        </div>
    )
}
