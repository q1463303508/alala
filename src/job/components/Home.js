import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import Homes from '../view/Home'
import {connect} from 'dva'

class Home extends Component {
    render() {
        let {history,title,setNewTitle} = this.props;
        if(localStorage.getItem('user') !== 'success'){
            return <Redirect to='/login' />
        }
        return <div>
            <Homes />
                <h1>{title}</h1>
                <button onClick={() => setNewTitle('Fuck')}>设置标题</button>
                <button onClick={()=>{
                    localStorage.removeItem('user');
                    history.push('/login')
                }}>退出</button>
            </div>
        
    }
}

let mapState = (state) => {
    return {...state.home}
}
let mapDispatch = (dispatch) => {
    return {
        setNewTitle(newTitle){
            dispatch({type:'home/setTitle',title:newTitle})
        }
    }
}
export default connect(mapState, mapDispatch)(Home);