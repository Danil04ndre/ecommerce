import React, { useEffect, useState } from 'react'
import CardProduct from '../components/CardProduct'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { IoIosArrowForward } from 'react-icons/io';

const ProductsCategory = () => {
   const {data} =  useSelector(state => state.products);
   const [dataQuantity, setDataQuantity] = useState(10);
   const [currentPage, setCurrentPage] = useState(1);

   let {category} = useParams();
   
    useEffect(() => {
      setCurrentPage(1);
    }, [category])
  
   let specificCategoryData = data.filter(products => products.category === category.charAt(0).toUpperCase() + category.slice(1));
   let indexFinal = currentPage * dataQuantity;
   let indexInitial = indexFinal - dataQuantity;

   let nData = specificCategoryData.slice(indexInitial,indexFinal);
   let nPages = Math.ceil(specificCategoryData.length / dataQuantity);
   
  return (
    <>
      <div className="breadcrumbs">
        <NavLink to="/">Inicio</NavLink>
        <IoIosArrowForward/>
        <NavLink className={({isActive}) => isActive ? 'breadcrum-active' : null}>{category} </NavLink>
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

export default ProductsCategory