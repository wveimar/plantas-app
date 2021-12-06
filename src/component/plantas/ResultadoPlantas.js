import { getPlantasById } from "../selectors/getPlantasById"

export const ResultadoPlantas = ({ publisher }) => {
    const plantas = getPlantasById(publisher);
    return (
        <div className="card-column">
            <h1>lista de plantas - {publisher}</h1>

            {
                plantas.map(plantas => (
                    <li key={plantas.id}>
                        {plantas.superhero}
                    </li>
                ))
            }
        </div>
    )
}
