
import { Link, useParams, useSearchParams } from "react-router-dom";
import { products } from "../data/data";



function Category() {
  const { categoryId } = useParams(); 
  const [searchParams ,setSearchParams] =useSearchParams();

  const maxPrice = searchParams.get("maxPrice" ) ? Number( searchParams.get("maxPrice" )) : Infinity;

  const currentCategoryArray = products.filter(
    (product) =>  product.categoryId === categoryId && product.price <= maxPrice 

  );    


  function handleChange(e) {
   const value = e.target.value; 
   setSearchParams( value ? {maxPrice: value} : {});          
  }





  return (
    <div> 
          <h1>Category: {categoryId}</h1>  
          <div> 
            <label htmlFor=""></label> 
            <input type="number"  id="maxPrice" placeholder="Enter max price" onChange={handleChange} value={searchParams.get("maxPrice") ||  ""}  />
          </div> 
          <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", gap: "20px" }}>
            {currentCategoryArray.map((product) => ( 
              <li key={product.id}> 
                <Link to={`/product/${product.id}`}> 
                  {product.name} — {product.price}$
                  <img src={product.img} alt={product.name} style={{ width: "150px", display: "block" }} />
                </Link>
              </li> 
            ))} 
          </ul> {""}
    </div> 
  );       
}

export default Category;