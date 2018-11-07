import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HeaderNav extends Component {
    constructor (props) {
      super(props)
      this.state = {
          defind:0,
          loginFlag:false
      }
    }
    render () {
        let {data} = this.props;
        let {defind,loginFlag} = this.state;
        console.log(localStorage.getItem("user"))
        return (
            <div className="headernav">
                <h1 className="logo">
                    <a href="#">
                        <img src="../img/logo1.jpg"/>
                        <div>
                            <span>艾的教育</span>
                            <span>Ideal Education</span>
                        </div>
                    </a>
                </h1>
                <ul  className="navlist">
                {
                    data && data.length>0 && data.map((v,i) => {
                        return <li key={i} className={defind===i?"active" : ""} onClick={()=>{this.clickTab(i)}}>{v}</li>
                            
                    })
                }
                </ul>
                <div className="headerlast">
                    <span className="username" onClick={() => {
                        this.loginInfo()
                    }}>
                        {
                            loginFlag ? "Jim阳光" : "登录"
                        }
                    </span>
                    <div className="tips">
                        通知栏
                    </div>
                </div>
            </div>
        )
    }
    clickTab(i){
        this.setState({defind:i})
    }
    loginInfo(){
        this.setState({loginFlag:true});
        localStorage.setItem("user","Jim阳光")
    }
}

export default HeaderNav