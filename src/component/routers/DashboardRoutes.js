import { Route,Routes } from "react-router"
import { Navbar } from "../ui/Navbar"
import {Plantas} from "../plantas/Plantas"
import {Insumos} from "../insumos/Insumos"
import { Search } from "../search/Search"
import { Planta } from "../planta/Planta"

export const DashboardRoutes = () => {
    return (
        <>
        <Navbar/>
        <div className="container">
        <Routes>
                <Route path="" element={<Plantas />} />
                <Route path="plantas" element={<Plantas />} />
                <Route path="insumos" element={<Insumos />} />
                <Route path="search" element={<Search/>} />
                <Route path="planta/:plantaId" element={<Planta/>} />
    
            </Routes>
            </div>
            
        </>
    )
}
