import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/About'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'
import History from './components/about/History'
// 三级路由
import PhoneName from './components/about/contact/PhoneName'
import PhoneNumber from './components/about/contact/PhoneNumber'


export const routes = [
    {path:'/',name:'homeLink',
        components:{
            default:Home,
            'orderingGuide':OrderingGuide,
            'delivery':Delivery,
            'history':History,
    }},
    {path:'/menu',name:'menuLink',component:Menu},
    {path:'/admin',name:'adminLink',component:Admin},
    {path:'/login',name:'loginLink',component:Login},
    {path:'/register',name:'registerLink',component:Register},
    {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About,
      children:[
        {path:'/about/contact',name:'contactLink',redirect:'/phoneName',component:Contact,
        children:[
          {path:'/phoneName',name:"phoneName",component:PhoneName},
          {path:'/phoneNumber',name:"phoneNumber",component:PhoneNumber},
          ]
        },
        {path:'/histroy',name:'histroyLink',component:History},
        {path:'/delivery',name:'deliveryLink',component:Delivery},
        {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide},
        
      ]
    },
    {path:'*',redirect:'/'}
]