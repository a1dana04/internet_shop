import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../redux/Slice/productsSlice";

const Header = ({ el }) => {
  const { user } = useSelector((s) => s.login);
  const { basket } = useSelector((s) => s.bas);
  const [search1, setSearch1] = useState("");
  const dispatch = useDispatch();

  return (
    <div id="" className="p-[30px]">
      <div className="container">
        <div className=" flex items-center justify-between text-white relative">
          <div className=" flex gap-20 ml-[200px] items-center text-xl justify-center border-2 p-3 rounded-2xl  text-white">
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}> Products</Link>
            <Link to={"/helpCentre"}>Help Centre</Link>
            <div className=" ml-[60px] flex items-center justify-center gap-4">
              {user.url ? (
                <Link to={"logOut"}>
                  <img
                    className="w-[50px] h-[50px] text-white"
                    src={user.url}
                    alt="img"
                  />
                </Link>
              ) : (
                <Link className="text-3xl" to={"/login"}>
                  <FaRegUserCircle />
                </Link>
              )}

              <div>
                <h1>{user.name}</h1>
              </div>
            </div>
          </div>

          <div className="flex text-3xl gap-[20px] mr-14  text-white">
            <input
            onChange={(e)=>setSearch1(e.target.value)}
            value={search1}
              className="w-[150px] h-10 ml-5 outline-none bg-transparent border-b-2 text-xl"
              type="text"
              placeholder="...search"
            />
            <Link to={"/search"}>
         <h1  onClick={() => dispatch(searchProduct(search1))}>     <CiSearch /></h1>
            </Link>
            <Link to={"/basket"}>
              <IoCartOutline />
              <p className=" absolute top-[5px] right-[47px] text-white-600 text-base">
                {basket.length}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
