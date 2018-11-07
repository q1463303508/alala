export default {
    // 命名空间
    namespace:'home',
    // 当前模块的数据
    state:{title:'设置为标题'},
    // 当前模块要处理的副作用
    effects:{

    },
    // 改变数据
    reducers:{
        setTitle(state, action) {
            state.title = action.title
            return {...state}
        }
    }
}