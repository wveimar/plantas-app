import { Link } from "react-router-dom";

export const PlantaCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,

}) => {
    const imagePath = `assets/${id}.jpg`;
    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <img src={imagePath} className="card-img" alt={superhero} />
                </div>
                <div className="col-8">
                    <h5 className="cart-title">{superhero}</h5>
                    <p className="card-text">{alter_ego}</p>
                    {
                        (alter_ego !== characters)
                        && <p className="card-muted">{characters}</p>
                    }
                    <p className="card-text">
                        <small className="text-muted">{first_appearance}</small>
                    </p>

                    <Link to={`/planta/${id}`}>Mas..</Link>
                </div>


            </div>
        </div>

    )
}
