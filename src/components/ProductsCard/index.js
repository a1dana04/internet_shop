import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { productDet } from "../redux/Slice/productsSlice";
import { addToBasket } from "../redux/Slice/basketSlice";

const ProductsCard = ({ el }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const detPro = () => {
    // nav(`/detalis/${el.id}`);
    return dispatch(productDet(el.id));
  };
  return (
    <div className="">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  mt-[10px]">
       <Link to={"/detalis"}>
       <img
          onClick={() => detPro()}
          class="rounded-t-lg w-[150px] h-[150px] ml-[70px] mt-[35px] cursor-pointer "
          src={el.image}
          alt=""
        />
       </Link>

        <h1 className=" border-y border-black mt-[20px]"></h1>
        <div className=" flex">
          <div class="p-5">
            <a href="#">
              <h6 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {el.title.slice(0, 10)}
              </h6>
            </a>
            <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">
              {el.rating.rate}
            </p>
          </div>
          <div class="p-5">
            <h5 onClick={()=>dispatch(addToBasket(el))} class="mb-2 text-2xl font-bold tracking-tight text-pink-900 dark:text-pink cursor-pointer ">
              Add to Card
            </h5>

            <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">
              {el.price}$
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
