import dva from 'dva'
import rootRouter from './job/router'
import home from './job/model/home'
console.log(home)
// 实例化一个dva应用
const app = dva();
app.model(home)
app.router(rootRouter);// 挂载应用
app.start('#root')// 启动