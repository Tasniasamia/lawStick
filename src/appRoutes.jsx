import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PublicRoutes } from "./routes/publicRoutes";
import PublicLayouts from "./layout/publicLayout";
import { ModalProvider } from "./context/modalContext";
import SignUp1 from "./components/modal/signup1";


const AppRoutes = () => {

    return (
        
                        <BrowserRouter>
                        <ModalProvider>
                                <Routes>
                                    {/* Public Layout */}
                                    <Route path="/" element={<PublicLayouts />}>
                                        {/* Public routes */}
                                        {PublicRoutes.map((route, index) => (
                                            <Route
                                                key={index}
                                                path={route.path}
                                                element={<route.component />}
                                            />
                                        ))}
                                     </Route>                               
                                </Routes>                
                                </ModalProvider>
                        </BrowserRouter>
                    
    );
};

export default AppRoutes;
