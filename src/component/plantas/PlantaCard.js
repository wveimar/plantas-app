import { Link } from "react-router-dom";

export const PlantaCard = ({
    id,
    nombre,
    familia,
    variedad
}) => {
    const imagePath = `assets/${id}.jpg`;
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <img src={imagePath} className="card-img" alt={nombre} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="cart-title">{nombre}</h5>
                        <p className="card-text">{variedad}</p>
                        {
                            (nombre !== variedad)
                            && <p className="card-muted">{nombre}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{familia}</small>
                        </p>
                        <Link to={`/planta/${id}`}>Mas..</Link>
                    </div>
                </div>


            </div>
        </div>

    )
}
