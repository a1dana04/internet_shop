import React from 'react';
import { useSelector } from 'react-redux';
import ProductsCard from '../ProductsCard';


const Search = () => {
    const {search} =useSelector((s)=>s.pro)
    console.log(search,"ser");
    return (
        <div id=''>
            <div className="container">
                <div className=" flex items-center justify-center gap-[50px]">
                    {
                        search.map((el)=><ProductsCard el={el}/>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Search;