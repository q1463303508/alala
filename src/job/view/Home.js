import React, { Component } from 'react'
import HeaderNav from '../common/HeaderNav'
import Datamodal from '../common/Datamodal'
import Userinfo from '../components/Userinfo'
import '../css/home.css'

class Home extends Component {
    constructor (props) {
      super(props)
      this.state = {
        b:0,
        data:["首页","员工管理","员工考勤","工作计划","客户管理","亚太学院","级别考核","管理助手","积分管理",],
        obj:[
            {
                title:"考勤分析",
                rightType:1,
                
            },{
                title:"日报",
                rightType:0,
            },{
                title:"客户(包含下属客户)",
                rightType:0,
            },{
                title:"活动数据",
                rightType:1,
            }
        ]
      }
    }
    render () {
        let {data,obj} = this.state;
        return (
            <div>
                <HeaderNav data={data}/>
                <div className="main">
                    <Userinfo />
                    <div className="each">
                        <Datamodal obj={obj}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home