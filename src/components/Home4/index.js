import React from 'react';
import music from "../assets/img/music.png"

const Home4 = () => {
    return (
        <div id=''>
            <div className="container">
            <h1 className='text-4xl font-bold mt-5 text-white text-center '>HELP CENTRE</h1>
                <div className=" flex ml-[200px]">
              <div className='text-white w-[330px] flex items-center justify-center flex-col gap-6 mt-9' >
           
                    <h1  className='text-sm border-2 px-[80px] py-2 rounded-xl '>Track Your Order</h1>
                    <h1  className='text-sm  border-2 px-[90px] py-2 rounded-xl'>Return Policy</h1>
                    <h1  className='text-sm  border-2 px-[85px] py-2 rounded-xl'>Service Centres</h1>
                    <h1  className='text-sm  border-2 px-[90px] py-2 rounded-xl'>Return Policy</h1>
              </div>
              <img className='w-[600px]' src={music} alt="" />
                  
                </div>
            </div>
            <h1 className='border-y-2  text-white'> </h1>
            
        </div>
    );
};

export default Home4;