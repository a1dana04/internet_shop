import React from "react";
import { useSelector } from "react-redux";

import ProductsCard from "../ProductsCard";

const CategoryP = () => {
  const { cate } = useSelector((s) => s.pro);

  return (
    <div className="container">
      <div className=" flex flex-wrap items-center justify-center gap-[40px] ">
        {cate.map((el, idx) => (
          <ProductsCard el={el} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CategoryP;
