// 1,导入vue与vue-router
import  Vue from 'vue'
import VueRouter from 'vue-router'
//导入组件
// import Home from '../components/Home'
// import About from '../components/About'
// import  User from '../components/User'

// import HomeNews from '../components/HomeNews'
// import  HomeMessage from '../components/HomeMessage'
//用懒加载的方式替换原本导入组件的方式
const Home=()=>import('../components/Home');
const About=()=>import('../components/About');
const User=()=>import('../components/User');
const HomeNews=()=>import('../components/HomeNews');
const HomeMessage=()=>import('../components/HomeMessage');
const Profile=()=>import('../components/Profile');
// 2，安装插件
Vue.use(VueRouter);
// 3，创建对象
const routes= [
  {
  path: '',
    //重定向，路由的默认路径
  redirect: '/home',
  },
  {
    path: '/home',
    component:Home,
    meta:{
      title: "首页"
    },
    children:[
      {
        path:'',
        redirect:'news'
      },
      {
        path:'news',
        component:HomeNews
      },{
        path:'message',
        component:HomeMessage
      }
    ]
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:"关于"
    }

  },
  {
    //冒号表示动态路由，后面的内容因跳转链接而不同
    path:'/user/:name',
    component: User,
  },
  {
    path:'/profile',
    component: Profile,
    meta:{
      title:"档案"
    }
  }
];
let router = new VueRouter({
  /* 6，创建映射关系
  routes属性下：
  path属性：url路径
  component：导入组件
  */
  routes,
  //默认为哈希url模式（不刷新页面改变url方式之一），缺点为rul中多出#，改为history模式
  mode:"history"
});
//前置钩子：跳转之后的调用 to：即将要跳转的链接 next：方法默认有的代码，现在的代码是覆盖源代码
router.beforeEach((to,from,next)=>{
  // document.title=to.meta.title;//首页不显示,因为首页是嵌套路由
  //   console.log(to.matched[0]);
  document.title=to.matched[0].meta.title;//嵌套路由显示
  // document.title=(to.matched[1]==null)?(to.matched[0].meta.title):(to.meta.title);
  next();
})
// 4，将对象导出
export default router;
// 5，在vue实例文件中导入并使用
// 使用：router属性

// 7，创建路由跳转标签：router-link标签，to属性
// 8，重定向首页
// path属性：''
// redirect属性
