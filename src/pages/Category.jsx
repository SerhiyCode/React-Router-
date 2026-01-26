
// import {  Link, useParams } from "react-router-dom";
// import { products } from "../data/data";

// function Category() {

//     const { categoryId } = useParams(); 
//     console.log(categoryId);
  
//       const currentCategoryArray = products.filter((products) => 
//       products.categoryId == categoryId);    
//       console.log(currentCategoryArray);

//   return (
//       <div>  
//         {currentCategoryArray.length > 0 ?  <> <ul style={{display: "flex"}}>
//         {currentCategoryArray.map((product) => ( 
//     <li key={product.id}> 
//       <Link to={`/product/${product.id}`}>  
//         {product.name} {product.price}$ 
//         <img src={product.img} alt={product.name} style={{ width: "150px" }} />
//       </Link>
//     </li> 
//   ))} 
//  </ul> </>  :  <p>Not Found</p>} 
//               <h1>Category {categoryId}</h1> 

// </div> 
//   );       
// }  
 
// export default Category; 
 



// import { Link, useParams } from "react-router-dom";
// import { products } from "../data/data";

// function Category() {  
//   const { categoryId } = useParams(); 
  
//   const currentCategoryArray = products.filter((product) => 
//     product.categoryId === categoryId
//   );    

//   return (
//     <div> 
//       <h1>Category: {categoryId}</h1> 

//       {currentCategoryArray.length > 0 ? (
//         <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", gap: "20px" }}>
//           {currentCategoryArray.map((product) => ( 
//             <li key={product.id}> 
//               <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "blue" }}> 
//                 <div>
//                   <strong>{product.name}</strong> — {product.price}$
//                 </div>
//                 <img 
//                   src={product.img} 
//                   alt={product.name} 
//                   style={{ width: "150px", display: "block", marginTop: "10px" }} 
//                 />
//               </Link>
//             </li> 
//           ))} 
//         </ul>
//       ) : (
//         <p>Products Not Found</p>
//       )}
//     </div> 
//   );       
// }

// export default Category; 





import { Link, useParams } from "react-router-dom";
import { products } from "../data/data";

function Category() {
  const { categoryId } = useParams(); 

  const currentCategoryArray = products.filter((product) => 
    product.categoryId === categoryId
  );    

  return (
    <div> 
      {currentCategoryArray.length > 0 ? (
        <>
          <h1>Category: {categoryId}</h1> 
          <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", gap: "20px" }}>
            {currentCategoryArray.map((product) => ( 
              <li key={product.id}> 
                <Link to={`/product/${product.id}`}> 
                  {product.name} — {product.price}$
                  <img src={product.img} alt={product.name} style={{ width: "150px", display: "block" }} />
                </Link>
              </li> 
            ))} 
          </ul>
        </>
      ) : (

        <div>
          <p>  Not Found</p>
          {/* <Link to="/"></Link> */}
        </div>
      )}
    </div> 
  );       
}

export default Category;