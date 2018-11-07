import React, { Component } from 'react'

class Userinfo extends Component {
    render () {
        return (
            <div className="userinfo">
                <div className="userimg">
                    <img src="../img/user.jpg" alt=""/>
                </div>
                <div className="userinfor">
                    <span>Hi,Jim阳光</span>
                    <span>岗位:分部主管{}</span>
                    <span>总积分:2000{}</span>
                    <span>积分排名:100/2500{}</span>
                </div>
            </div>
        )
    }
}

export default Userinfo