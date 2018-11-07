import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'

/**
 * @param {Array} routes [Route的配置]
 * @return {List} [Route列表]
 */

function RenderRoute({routes, match}){
    return <Switch>
        {
            routes.map((item, key) => {
                let url = match.path === '/' ? item.path : match.path + item.path;
                return <Route key={key} path={url} render={(props) => {
                    let Transfer = item.component
                    return <Transfer {...props} routes={item.children}></Transfer>
                }}/>
            })
        }
    </Switch>
}
RenderRoute = withRouter(RenderRoute)
export default RenderRoute
