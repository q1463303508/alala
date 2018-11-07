import Login from '../components/Login'
import Layout from '../components/Layout'
import Home from '../components/Home'
import Company from '../components/Company'
import Check from '../components/Check'
import Allot from '../components/Allot'
import Docs from '../components/Docs'
import Test from '../common/Test'

export default [
    {
        path:'/login',
        component:Login,
        linkText:'登录'
    },{
        path:'/test',
        component:Test
    },
    {
        path:'/layout',
        component:Layout,
        children:[
            {
                path:'/home',
                component:Home,
            },{
                path:'/company',
                component:Company,
                linkText:'员工管理',
                children:[
                    {
                        path:'/docs',
                        component:Docs,
                        linkText:'档案管理',
                    },{
                        path:'/allot',
                        component:Allot,
                        linkText:'分配管理',
                    }
                ]
            },{
                path:'/check',
                component:Check
            }
        ]
    }
]