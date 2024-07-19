import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProduct } from "../redux/Slice/productsSlice";
import axios from "axios";
import ProductsCard from "../ProductsCard";

const Products = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((s) => s.pro);
  const getProduct = async () => {
    let res = await axios(`https://fakestoreapi.com/products`);
    let { data } = res;
    return dispatch(addToProduct(data));
  };
  console.log(product, "aid");
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="container">
      <div className=" flex items-center justify-center flex-wrap gap-[30px]">
        {product.map((el, idx) => (
          <ProductsCard el={el} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Products;
