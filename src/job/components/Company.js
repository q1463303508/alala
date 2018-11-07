import React, { Component } from 'react';
import RenderRoute from '../router/renderRoute'
import Content from '../common/Content'

class Company extends Component {
    render() {
        let aside = this.props.routes.map(item => {
            return {
                text:item.linkText,
                path:this.props.match.path + item.path
            }
        })
        return <div className="company">
                <Content aside={aside}>
                    <div>
                        <RenderRoute  routes={this.props.routes} />
                    </div>
                </Content>
            </div>
        
    }
}

export default Company;