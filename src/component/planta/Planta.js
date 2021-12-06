import {useParams} from "react-router-dom"

export const Planta = () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            <h1>Planta</h1>
        </div>
    )
}
