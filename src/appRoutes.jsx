import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PublicRoutes } from "./routes/publicRoutes";
import PublicLayouts from "./layout/publicLayout";
import { ModalProvider } from "./context/modalContext";
import NotFound from "./pages/NotFound";


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
                                     <Route path="*" element={<NotFound />} />
                           
                                </Routes>                
                                </ModalProvider>
                        </BrowserRouter>
                    
    );
};

export default AppRoutes;
