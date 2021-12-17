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
        nombreCientifico,
        nombre,
        familia,
        variedad
    } = plantas;

    const imagePath = `/assets/${id}.jpg`;

    return (

        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={imagePath}
                    alt={nombre}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{nombre}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Nombre Cientifico: </b>{nombreCientifico}</li>
                    <li className="list-group-item"><b>Familia: </b>{familia}</li>
                    <li className="list-group-item"><b>Variedad: </b>{variedad}</li>
                </ul>
                <h5>Familia</h5>
                <p>{familia}</p>
            </div>
            <h1>Planta</h1>
            <button
                className="btn btn-outline-info"
                onClick={handleReturn}
            >Regresar</button>


        </div>
    )
}
