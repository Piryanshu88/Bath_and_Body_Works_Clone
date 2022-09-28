import Home from "./Home";
import Login  from "./Login";
import Cart from "./Cart";
import {Route,Routes} from 'react-router-dom'
function AllRoutes(){

    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    )
}

export default AllRoutes