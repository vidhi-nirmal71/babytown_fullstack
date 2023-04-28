import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import { MyContext } from '../App';
import Categories from '../containers/App/Catagories';
import Home from '../containers/App/Home';
import Page404 from '../containers/App/Page404';
import LoginPage from '../containers/Login';
import MainLayout from '../layout/MainLayout';


function Routing() {
  // const data = useContext(MyContext);
  // console.log(data,"routing data");
  return (
    <>
     <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Home category='boy'  pto/>} />
                <Route path="/home" element={<Home category='boy'/>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/categories" element={<Categories/>} >
                    <Route path="boy" element={<Categories  category='boy'/>} />
                    <Route path="girl" element={<Categories  category='girl'/>} />
                    <Route path="footwear" element={<Categories category='footwear'/>} />
                    <Route path="toys" element={<Categories category='toy'/>} />
                    <Route path="bath" element={<Categories category='bath'/>} /> 
                </Route>
            </Route>
            <Route path="*" element={<Page404 />}/>
    </Routes>
    
    
    </>
  )
}

export default Routing
