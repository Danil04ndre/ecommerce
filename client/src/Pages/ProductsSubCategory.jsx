import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';


import { IoIosArrowForward } from "react-icons/io";
import CardProduct from '../components/CardProduct';
import Pagination from '../components/Pagination';


const ProductsSubCategory = () => {
  const [dataQuantity, setDataQuantity] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  let {category,subcategory} = useParams();
  const {data} = useSelector(state => state.products);

  useEffect(() => {
    setCurrentPage(1);
  }, [subcategory])

  let specificSubCategoryData = data.filter(products => products.sub_category === subcategory.charAt(0).toUpperCase() + subcategory.slice(1));
  let indexFinal = currentPage * dataQuantity;
  let indexInitial = indexFinal - dataQuantity;

  let nData = specificSubCategoryData.slice(indexInitial,indexFinal);
  let nPages = Math.ceil(specificSubCategoryData.length / dataQuantity);
  return (
   <>
   <div className="breadcrumbs">
      <NavLink to="/">Inicio</NavLink>
      <IoIosArrowForward/>
      <NavLink to={`/categoria-producto/${category}`}>{category} </NavLink>
      <IoIosArrowForward/>
      <NavLink className={({isActive}) => isActive ? 'breadcrum-active' : null}>{subcategory}</NavLink>
   </div>
    <div className="products-categories">
      {nData.length > 0 ? nData.map((product, index) => (
          <CardProduct key={index} product={product} />
        )
      ) : <h1>cargando</h1>}
    </div>
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} nPages={nPages}/>
   </>
  )
}

export default ProductsSubCategory