import React from 'react'
import config from './config'

import {
    BrowserRouter as Router
} from 'react-router-dom'
import RenderRoute from './renderRoute'
function RootRouter(){
    return <Router>
            <RenderRoute routes={config} />
        </Router>
}
export default RootRouter