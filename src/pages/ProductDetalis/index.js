import React from "react";
import { useSelector } from "react-redux";

const ProductDetalis = () => {
  const { details } = useSelector((s) => s.pro);
  console.log(details);

  return (
    <div id="">
      <div className="container">
        <div className="mt-[30px] flex items-center justify-center gap-[20px] ">
          <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[350px]  w-[250px] p-4 ">
            <a href="#">
              <img class="rounded-t-lg cursor-pointer " src={details.image} alt="" />
            </a>
          </div>

          <div className="">
            <div class=" border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[350px]  w-[550px] ml-[100px] p-6 bg-transparent bg-zinc-400">
                <h1 className="text-xl font-semibold text-white ">{details.title}</h1>
              <i className="m-4">"{details.description}"</i>

              <div className="flex items-center justify-between mt-16">
                <div>
                  <h1 className=" font-medium">{details.category}</h1>

                </div>

                <div className=" text-2xl">
                  {details.price}$

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" border-y text-white mt-16"></h1>
    </div>
  );
};

export default ProductDetalis;
