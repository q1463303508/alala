import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Aside extends Component {
    render () {
        let {aside} = this.props;
        return (
            <div>
                {
                    aside && aside.map((item,key) => {
                        return <Link key={key} to={item.path}>{item.text}</Link>
                    })
                }
            </div>
        )
    }
}

export default Aside