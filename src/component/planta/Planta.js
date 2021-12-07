import { useMemo } from "react";

import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getPlantasById } from "../selectors/getPlantasById";

export const Planta = () => {
    const { plantaId } = useParams();
    const navigate = useNavigate();
    const plantas = useMemo(() => getPlantasById(plantaId), [plantaId]);
    ;

    const handleReturn = () => {
        navigate(-1);

    }

    if (!plantas) {

        return <Navigate to='/' />

    }
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters

    } = plantas;

    const imagePath = `/assets/${id}.jpg`;

    return (

        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={imagePath}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>first Appearance: </b>{first_appearance}</li>
                    <li className="list-group-item"><b>publisher: </b>{publisher}</li>

                </ul>
                <h5>characters</h5>
                <p>{characters}</p>
            </div>
            <h1>Planta</h1>
            <button
                className="btn btn-outline-info"
                onClick={handleReturn}
            >Regresar</button>


        </div>
    )
}
