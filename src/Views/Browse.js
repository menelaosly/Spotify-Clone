import React from 'react'
import { NavLink,Route,useRouteMatch } from 'react-router-dom'
import Empty from "./Empty"
export default function Browse() {
    const { path } = useRouteMatch();
    return (
        <>
            <div className="heading static">
                <h1>Browse</h1>
                <nav className="tabs">
                    <NavLink to={`${path}/genres`} exact  className="tab" activeClassName="tab--active">GENRES & MOODS</NavLink>
                    <NavLink to={`${path}/podcast`} className="tab" activeClassName="tab--active">PODCASTS</NavLink>
                    <NavLink to={`${path}/charts`} className="tab" activeClassName="tab--active">CHARTS</NavLink>
                    <NavLink to={`${path}/new-releases`} className="tab" activeClassName="tab--active">NEW RELEASES</NavLink>
                    <NavLink to={`${path}/discover`} className="tab" activeClassName="tab--active">DISCOVER</NavLink>
                </nav>
            </div>

            <Route exact path={`/browse/:id`}>
                <Empty />
            </Route>
        </>
    )
}
