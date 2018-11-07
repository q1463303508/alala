import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import RenderRoute from '../router/renderRoute'

class Layout extends Component {
    render() {
        window.lay = this;
        let {path} = this.props.match;
        let {routes} = this.props;
        return <div>
                <nav>
                    <Link to={`${path}/home`}>首页</Link>
                    <Link to={`${path}/company`}>员工管理</Link>
                    <Link to={`${path}/check`}>员工考勤</Link>
                </nav>
                <section>
                    <RenderRoute routes={routes}/>
                </section>
            </div>
    }
}

export default Layout;