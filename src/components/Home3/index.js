import React from 'react';
import image1 from "../assets/img/car1.png"
import image2 from "../assets/img/procent1.png"
import image3 from "../assets/img/zamet.png"

const Home3 = () => {
    return (
        <div id=''>
            <div className="container">
                <div className=" mt-20">
                  <div className='flex items-center justify-center gap-40 '> 
                    <img className='w-[130px]' src={image1} alt="" />
                    <img  className='w-[130px]'src={image2} alt="" />
                    <img className='w-[130px]' src={image3} alt="" />
                  </div>
                    <div className='flex text-2xl text-white items-center justify-center gap-40 mt-5 ml-14'>
                      <div><h1>Free Shipping</h1></div>
                      <div> <h1>GST Billing</h1></div>
                       
                        <div><h1>7-Day Replacement</h1></div>
                    </div>

                </div>
            </div>
            <h1 className='border-y-2  text-white  mt-20'> </h1>
            
        </div>
    );
};

export default Home3;