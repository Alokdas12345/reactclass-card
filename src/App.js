import React from 'react'
import Blog  from'./components/Blog';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import img1 from "./components/image/img1.png";
import img2 from "./components/image/img2.png";
import img3 from "./components/image/img3.png";
import img4 from "./components/image/img4.png";

import  './App.css';
export default function App() {
  return (
    
    <div className='App' style={{ marginTop:"50px"}}>
     <div style={{}}><h4 style={{textAlign:"center"}}><RocketLaunchIcon id="rocket"/>Team Members</h4>/</div> 
<div style={{display:'flex'}}>

      <Blog name="Emma olivia" email="Emmaolivia@gmail.com" image={img1}/>
      <Blog name="Sofia Adward" email="Sofiaadward@gmail.com" image={img2}/>
      <Blog name="Toufique liaz" email="Toufiqueliaz@gmail.com" image={img3}/>
      <Blog name="Amelia Alex" email="Ameliaalex@gmail.com" image={img4}/>
</div>


    </div>
  )
}
