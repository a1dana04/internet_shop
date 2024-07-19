import React from "react";
import img2 from "../assets/img/img-air.png";
import img3 from "../assets/img/img-air2.png";
import img4 from "../assets/img/airrrrr.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { categoryProduct } from "../redux/Slice/productsSlice";


const Home2 = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div id="">
      <div className="container">
        <div className=" flex items-center justify-center flex-col text-white gap-14 ">
          <h1 className="text-4xl font-bold mt-5">PRODUCTS</h1>

          <h1
            onClick={() => {
              dispatch(categoryProduct("men's clothing"));
              nav("/categoryP");
            }}
            className="text-4xl border-2 px-20 py-6 rounded-xl cursor-pointer "
          >
            Men's clothing
          </h1>

          <h1
            onClick={() => {
              dispatch(categoryProduct("women's clothing"));
              nav("/categoryP");
            }}
            className="text-4xl  border-2 px-14 py-6 rounded-xl cursor-pointer"
          >
            Women's clothing
          </h1>
          <h1
            onClick={() => {
              dispatch(categoryProduct("jewelery"));
              nav("/categoryP");
            }}
            className="text-4xl  border-2 px-32 py-6 rounded-xl cursor-pointer"
          >
            Jewelery
          </h1>
          <h1
            onClick={() => {
              dispatch(categoryProduct("electronics"));
              nav("/categoryP");
            }}
            className="text-4xl  border-2 px-28 py-6 rounded-xl cursor-pointer"
          >
            Electronics
          </h1>
          <img
            className=" absolute w-[200px] mt-[-20%] ml-[40%]"
            src={img4}
            alt=""
          />

          <img
            className=" absolute w-[200px] mt-[5%] ml-[-35%]"
            src={img2}
            alt=""
          />
          <img
            className=" absolute w-[250px] mt-[38%] mr-[-35%]"
            src={img3}
            alt=""
          />
        </div>
      </div>
      <h1 className="border-y-2  text-white  mt-20"> </h1>
    </div>
  );
};

export default Home2;
