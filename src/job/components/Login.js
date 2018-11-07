import React, { Component } from 'react';

class Login extends Component {
    render() {
        let {history} = this.props;
        return <div>
                <button onClick={this.getToken}>获取权限</button>
                <button onClick={() => {history.push('/layout/home')}}>登录</button>
            </div>
    }
    getToken() {
        localStorage.setItem('user','success')
        alert('成功')
    }
}

export default Login;