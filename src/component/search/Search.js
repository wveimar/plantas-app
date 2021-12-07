import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { getPlantasByName } from '../selectors/getPlantasByName';
import { PlantaCard } from '../plantas/PlantaCard';


export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    
    const [ formValues, handleInputChange ] = useForm({
        searchText: q,
    });

    const { searchText } = formValues;

    const plantasFileted = useMemo( () => getPlantasByName(q), [q] );


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ searchText }`)
    }


    return (
        <>
            <h1>Búsquedas</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Buscar una Planta"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />


                        <button 
                            className="btn btn-outline-primary mt-1"
                            type="submit">
                            Buscar...
                        </button>

                    </form>


                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />

                    {
                        (q === '')
                            ? <div className="alert alert-info"> Buscar una planta </div>
                            : ( plantasFileted.length === 0 ) 
                                && <div className="alert alert-danger"> No hay resultados: { q } </div>
                    }


                    {
                        plantasFileted.map(hero => (
                            <PlantaCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }


                </div>

            </div>

        </>
    )
}