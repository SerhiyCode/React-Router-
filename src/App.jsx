import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
// import Header from " /components/Header";
// import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Category from "./pages/Category";



const router = createBrowserRouter([
  {path: "/",
   element: <Layout /> ,
   children: [ 
  { index: true,  element: <Home />},
  { path: "about", element: <About />},
  { path: "cart", element: <Cart />}, 
  { path: "category/:categoryId", element: <Category /> },   
  { path: "product/:productId", element: <ProductDetails />}, 
  { path: "*", element: <NotFound />} 
  ]
 },
]);  
 

// const router = createBrowserRouter([
//     {path: "/", element: <Home />},
//     {path: "about", element: <>
//     <About />
//     <Header /> 
//     <Footer />
//      </> }, 
//     {path: "cart", element:
//      <> 
//     <Cart /> 
//     <Header /> 
//     <Footer />
//     </>  },  
//     {path: "categories", element: <> 
//     <Categories /> 
//     <Header /> 
//     <Footer />
//      </> 
//     },  
//     {path: "product", element: <>
//        <ProductDetails /> 
//        <Header />  
//        <Footer />
//       </>},   
//     {path: "*", element: <NotFound />},   
// ]);



function App() {
  return <RouterProvider router={router} />; 

}

export default App;


