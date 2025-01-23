import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PublicRoutes } from "./routes/publicRoutes";
import PublicLayouts from "./layout/publicLayout";


const AppRoutes = () => {

    return (
        
                        <BrowserRouter>
                      
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
                         
                        </BrowserRouter>
                    
    );
};

export default AppRoutes;
