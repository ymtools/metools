import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'hash',//history 打包需要使用hash
    routes: [
        { name: '/', path: '/', component: require('../pages/welcome'), meta: {  } },
        { name: 'home', path: '/home', component: require('../pages/welcome'), meta: {  } },
    ]
})

router.beforeEach((to, from, next) => {
    console.log(`路由开始：${from.path}`)
    // console.log(from)
    next();
});

router.afterEach(route => {
    // console.log(route);
    console.log(`路由结束：${route.path}`)
})
export default router