import { Outlet } from 'react-router-dom'; 
import Topbar from '../components/common/topbar';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/footer';


const PublicLayouts = () => {
  return (
    <div>
    
        <>
          <Topbar />
          <Navbar />
          <Outlet />
          <Footer />
        </>
       
    </div>
  );
};

export default PublicLayouts;