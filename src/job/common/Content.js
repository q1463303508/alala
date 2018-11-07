import React, { Component } from 'react';
import Aside from './Aside'

class Content extends Component {
    render() {
        let {aside} = this.props;
        return (
            <div>
                <Aside aside={aside}/>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Content;