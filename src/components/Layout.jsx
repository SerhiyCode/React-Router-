import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header";


function Layout() {
    return <div> 
            <Header />
          <main>
            <Outlet />               
          </main> 
          <Footer />  
    </div>
}

export default Layout; 