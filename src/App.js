import Home from "./routes/home/home";
import {Route, Routes} from "react-router-dom";
import Navbar from "./routes/navbar/navbar";
import Authorization from "./routes/authorization/authorization";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";

const App = () => {

    return <>
        <Routes>
            <Route path={'/'} element={<Navbar/>}>
                <Route index element={<Home/>}/>
                <Route path={'shop/*'} element={<Shop/>}/>
                <Route path={'auth'} element={<Authorization/>}/>
                <Route path={'checkout'} element={<Checkout/>}/>
            </Route>
        </Routes>
    </>
}

export default App;