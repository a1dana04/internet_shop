import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import HelpCentre from "./components/HelpCentre";

import Home from "./components/Home";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Home4 from "./components/Home4";
import Footer from "./components/Footer";
import Login from "./components/Login";
import LogOut from "./components/LogOut";
import Products from "./components/Products";
import ProductDetalis from "./pages/ProductDetalis";
import Basket from "./components/Basket";
import Search from "./components/Search";
import CategoryP from "./components/CategoryP";
import BuyNow from "./components/BuyNow";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path = "/" element ={<Home2/>}/>
          <Route path = "/" element ={<Home3/>}/>
            <Route path = "/" element ={<Home4/>}/> */}

        <Route path="/products" element={<Products />} />
        <Route path="/helpCentre" element={<HelpCentre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logOut" element={<LogOut />} />
        <Route path="/detalis" element={<ProductDetalis />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/search" element={<Search />} />

        <Route path="/categoryP" element={<CategoryP />} />
        <Route path="/buyNow" element={<BuyNow />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
