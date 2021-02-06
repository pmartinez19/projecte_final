import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { Navbar } from '../componentes/ui/navBar'
import { empresasScreen } from '../componentes/empresas/empresasScreen'
import { particularesScreen } from '../componentes/particulares/particularesScreen'
import { voluntariadoScreen } from '../componentes/voluntariado/voluntariadoScreen'


export const DashboardRouter = () => {
    return (
        <>
            <Navbar/>
            <div>
                <switch>
                    <Route exact path = "/empresas" component = {empresasScreen} />
                    <Route exact path = "/particulares" component = {particularesScreen} />
                    <Route exact path = "/voluntariado" component = {voluntariadoScreen} />

                    <Redirect to = "/particulares"/>
                </switch>

            </div>
        </>
    )
}
