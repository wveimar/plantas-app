import {getPlantasByFamilia} from '../selectors/getPlantasByFamilia'
import { PlantaCard } from "./PlantaCard";

export const ResultadoPlantas = ({ publisher }) => {
    const plantas = getPlantasByFamilia(publisher);
    
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
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
