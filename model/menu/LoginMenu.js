import React,{} from 'react';
import HomeIcon from '../../../image/menu_home.png'
import HomeIcon2 from '../../../image/menu_login.png'
import HomeIcon3 from '../../../image/menu_mylist.png'
import HomeIcon4 from '../../../image/menu_product.png'
import HomeIcon5 from '../../../image/menu_myaccounts.png'
import HomeIcon6 from '../../../image/notification.png'
import HomeIcon7 from '../../../image/menu_contactus.png'
import HomeIcon8 from '../../../image/menu_about.png'
import HomeIcon9 from '../../../image/menu_store.png'
import BlackHome from '../../../image/blackHome.png';
import LogoutIcon from '../../../image/logout.png';



const LoginMenu=[
    
    {id:'1',name:'Home', img :HomeIcon,page:'HOME'},
    {id:'2',name:'My Lists', img :HomeIcon3, page:'MyList'},
    {id:'4',name:'Products', img :HomeIcon4, page:'Products'},
    {id:'5',name:'My Account', img :HomeIcon5, page:'MyAccount'},
    {id:'6',name:'Product Reminders', img :HomeIcon6, page:'ProductNotification'},
    {id:'7',name:'Contact Us', img :HomeIcon7, page:'ContactUs'},
    {id:'8',name:'About Us', img :HomeIcon8, page:'About'},
    {id:'9',name:'Store', img :HomeIcon9, page:'Store'},
    {id:'10',name:'My Rewards', img :HomeIcon9, page:'MyRewards'},
    {id:'10',name:'Logout', img :LogoutIcon, page:'Logout'},
]

export  default LoginMenu;