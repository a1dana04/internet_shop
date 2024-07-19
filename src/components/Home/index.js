import React from "react";
import img2 from "../assets/img/img1.png";
import Home2 from "../Home2";
import Home3 from "../Home3";
import Home4 from "../Home4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="">
      <div className="container">
        <div className="">
          <h1 className="text-4xl text-white font-bold text-center mt-16">
            Enjoy Every
          </h1>
          <div className="flex items-center justify-center">
            <img src={img2} alt="img" />
          </div>
          <div className="flex items-center justify-center gap-28">
      <Link to={"/buyNow"}>    <button className="w-[150px] h-[53px] border-2 text-pink-600 rounded-xl">Buy Now</button> </Link>
          <button className="w-[200px] h-[53px] border-2 text-white rounded-xl">Explore More</button>
          </div>
       
         
        </div>
      </div>
      <h1 className=" border-y-2  text-white  mt-20"></h1>
      <>
      <Home2/>
      <Home3/>
      <Home4/>
    
      </>
    </div>
  );
};

export default Home;
