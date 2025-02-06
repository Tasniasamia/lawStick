import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PublicRoutes } from "./routes/publicRoutes";
import PublicLayouts from "./layout/publicLayout";
import { ModalProvider } from "./context/modalContext";
import NotFound from "./pages/NotFound";
import UserDashboardLayout from "./layout/userDashboardLayout";
import { UserRoutes } from "./routes/userRoutes";
import { AttorneyRoutes } from "./routes/attorneyRoutes";
import AttorneyDashboardLayout from "./layout/attorneyDashboardLayout";


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
                                          {/* User Dashboard Layout */}
                                          <Route
                                            path="user/"
                                            element={<UserDashboardLayout />}
                                        >
                                            {/* User routes */}
                                            {UserRoutes.map((route, index) => (
                                                <Route
                                                    key={index}
                                                    path={route.path}
                                                    element={<route.component />}
                                                />
                                            ))}
                                        </Route>
                                        <Route
                                            path="attorney/"
                                            element={<AttorneyDashboardLayout />}
                                        >
                                            {/* User routes */}
                                            {AttorneyRoutes.map((route, index) => (
                                                <Route
                                                    key={index}
                                                    path={route.path}
                                                    element={<route.component />}
                                                />
                                            ))}
                                        </Route>
                                     </Route>    
                                     <Route path="*" element={<NotFound />} />
                           
                                </Routes>                
                                </ModalProvider>
                        </BrowserRouter>
                    
    );
};

export default AppRoutes;
