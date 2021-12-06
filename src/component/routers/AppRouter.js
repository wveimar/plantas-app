import { Routes, Route, BrowserRouter } from "react-router-dom";

import {DashboardRoutes} from "./DashboardRoutes"
import { Login } from "../login/Login";

export const AppRouter = () => {
    return (
        <BrowserRouter>
          
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<DashboardRoutes/>}/>
              </Routes>
        </BrowserRouter>
    )
}
