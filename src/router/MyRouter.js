import {Route, Routes ,route}from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import NewRegister from '../pages/NewRegister';
import Profile from '../pages/Profile';
function MyRouter(){
 
 return(
    <Routes>
        <Route path="/" element={<Login/>}/>
         <Route path="/Home" element={<Home/>}/>
          <Route path="/Register" element={<NewRegister/>}/>
        <Route path="/Profile" element={<Profile/>}/>
    </Routes>
 )
}
export default MyRouter;