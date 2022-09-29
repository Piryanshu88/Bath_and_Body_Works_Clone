import Home from "./Home";
import Login  from "./Login";
import Cart from "./Cart";
import {Route,Routes} from 'react-router-dom'
import Top from "../Components/Top";
import SingleProducts from "../Components/SingleProducts";
function AllRoutes(){

    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path="/topOffers" element={<Top/>}></Route>
            <Route path='/topOffers/:topOffers_id' element={<SingleProducts/>}></Route>
        </Routes>
    )
}

export default AllRoutes