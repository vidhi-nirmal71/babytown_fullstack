import { IMAGES } from "../assests";
import { Home, Bathtub, Boy, Girl, Toys, Settings, AccountCircle, PersonRounded, PersonTwoTone,  } from '@mui/icons-material';

export const DrawerList = [
    {id:1, name:'Home',path:'/', logo:<Home />},
    {id:2, name:'Boy Fashion',path:'/categories/boy', category:'boy',logo:<Boy />},
    {id:3, name:'Girl Fashion',path:'/categories/girl',category:'girl',logo:<Girl />},
    {id:4, name:'Footwear',path:'/categories/footwear',category:'foot',logo:<PersonTwoTone />},
    {id:5, name:'Toys',path:'/categories/toys',category:'toy',logo:<Toys />},
    {id:6, name:'Bath',path:'/categories/bath',category:'bath',logo:<Bathtub />}
]

export const DrawerList2 = [
    {id:1, name:'Account',logo:<AccountCircle />},
    {id:2, name:'Profile',logo:<PersonRounded />},
    {id:3, name:'settings',logo:<Settings />},
]

export const products = [
    {id:1,name:"Boy T-shirts",price: 129.99,image: IMAGES.boyF2,category:'boy'},
    {id:2,name:"Boy T-shirt",price: 129.99,image:IMAGES.boyT2,category:'boy'},
    {id:3,name:"Boy Shirt",price: 129.99,image:IMAGES.boyS2,category:'boy'},
    {id:4,name:"Boy Shirt",price: 129.99,image:IMAGES.boyS,category:'boy'},
    {id:5,name:"Boy Wear",price: 129.99,image:IMAGES.boyF3,category:'boy'},
    {id:6,name:"Boy T-shirt",price: 129.99,image:IMAGES.boyT,category:'boy'},
    {id:7,name:"Girl frock",price: 129.99,image:IMAGES.girl,category:'girl'},
    {id:8,name:"Girl frock",price: 129.99,image:IMAGES.girl1,category:'girl'},
    {id:9,name:"Girl frock",price: 129.99,image:IMAGES.girl2,category:'girl'},
    {id:10,name:"Girl frock",price: 129.99,image:IMAGES.girl3,category:'girl'},
    {id:11,name:"Girl frock",price: 129.99,image:IMAGES.girl4,category:'girl'},
    {id:12,name:"Baby Toys",price: 129.99,image:IMAGES.toy1,category:'toy'},
    {id:13,name:"Baby Toys",price: 129.99,image:IMAGES.toy2,category:'toy'},
    {id:14,name:"Baby Toys",price: 129.99,image:IMAGES.toy3,category:'toy'},
    {id:15,name:"Baby Toys",price: 129.99,image:IMAGES.toy4,category:'toy'},
    {id:16,name:"Baby Toys",price: 129.99,image:IMAGES.toy5,category:'toy'},
    {id:17,name:"footwear",price: 129.99,image:IMAGES.foot1,category:'foot'},
    {id:18,name:"footwear",price: 129.99,image:IMAGES.foot2,category:'foot'},
    {id:19,name:"footwear",price: 129.99,image:IMAGES.foot3,category:'foot'},
    {id:20,name:"footwear",price: 129.99,image:IMAGES.foot4,category:'foot'},
    {id:21,name:"footwear",price: 129.99,image:IMAGES.foot5,category:'foot'},
    {id:22,name:"Baby Bath",price: 129.99,image:IMAGES.bath1,category:'bath'},
    {id:23,name:"Baby Bath",price: 129.99,image:IMAGES.bath2,category:'bath'},
    {id:24,name:"Baby Bath",price: 129.99,image:IMAGES.bath3,category:'bath'},
    {id:25,name:"Baby Bath",price: 129.99,image:IMAGES.bath4,category:'bath'},
    {id:26,name:"Baby Bath",price: 129.99,image:IMAGES.bath5,category:'bath'},
  ]

export const BannerImages = [
    IMAGES.ban7,
    IMAGES.ban1,
    IMAGES.ban2,
    IMAGES.ban6,
    IMAGES.ban3,
    IMAGES.ban5,
    
]
