import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineExitToApp } from "react-icons/md";
import { clearLogOut } from "../redux/Slice/logInSlice";
import { useNavigate } from "react-router";

const LogOut = () => {
  const { user } = useSelector((s) => s.login);
  const dispatch = useDispatch()
  const nav1 = useNavigate()
  return (
    <div id="" className="">
      <div className="container">
        <div className=" flex items-center justify-center relative ">
          <a
            href="#"
            class="flex flex-col items-center bg-slate-500  rounded-lg md:flex-row md:max-w-xl  w-[600px] h-[250px] mt-10  "
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 rounded-[100%]"
              src={user.url}
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal ml-20 ">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
             <span className=" text-purple-900">  Name:</span> {user.name}
              </h5>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <span className=" text-purple-900">  Email:</span> {user.email}
              </h5>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <span className=" text-purple-900">  Mobile:</span> {user.mobile}
              </h5>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
              <span className=" text-purple-900 ">  Password:</span> {user.password}
              </h5>
              
             
            </div>
            <a onClick={()=>{
          
              dispatch(clearLogOut())
              nav1("/")
            }} className=" absolute text-2xl top-[230px] right-[340px] "><MdOutlineExitToApp /></a>
          </a>
        </div>
      </div>
      <h1 className='border-y-2  text-white mt-40'> </h1>
    </div>
  );
};

export default LogOut;
