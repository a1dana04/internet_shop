import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketCard from "../BasketCard";
import { deleteBasket, minusQyan, plusQyan, remov } from "../redux/Slice/basketSlice";
import TelegramEx from "../TelegramEx";

const Basket = () => {
  const { basket } = useSelector((s) => s.bas);
  const dispatch = useDispatch()
  console.log(basket, "bas");

  const TotalPrice = basket.reduce((acc,el)=>{
   return acc + + Math.round(el.price * el.quantity)
  },0)
  return (
   <div className="">
     <div>
    <div className="container">
      <div className="">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                  Product
                </th>
                <th scope="col" class="px-6 py-3">
                  Qty
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
                {
                    basket.map((el)=>(
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="p-4">
                            <img className="w-[100px] h-[100px]" src={el.image} alt="iPhone 12"/>
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {el.title.slice(0,10)} 
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <button
                            onClick={()=>dispatch(minusQyan(el))}
                                 class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                    <span class="sr-only">Quantity button</span>
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                    </svg>
                                </button>
                               <h1>{el.quantity}</h1>
                                <button
                                    onClick={()=>dispatch(plusQyan(el))}
                                 class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                    <span class="sr-only">Quantity button</span>
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {Math.round(el.price * el.quantity)}$
                        </td>
                        <td
                        onClick={()=>dispatch(deleteBasket(el))}
                         class="px-6 py-4">
                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    ))

                }
                  </tbody>

       
          </table>

          
<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         
              
                <tfoot>
            <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="px-60 py-3 text-xl">Total</th>
             
                <td class=" px-6 py-3 text-lg">{TotalPrice}$</td>
            </tr>
        </tfoot>
        </thead>
        </table>
        </div>
      </div>
      <button
      onClick={()=>dispatch(remov())}  type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-[550px] mt-20">remove</button>
    </div>
   
    <h1 className=" border-y text-white mt-[50px]"></h1>
    </div>
    <TelegramEx/>
   </div>
    
   
    
  );



};

export default Basket;
