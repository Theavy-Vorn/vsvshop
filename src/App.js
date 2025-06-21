
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { profileUser } from "./redux/actions/authAction";
import { BrowserRouter, Outlet, Route ,Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ProductDetailPage from './pages/ProductDetailPage';
import FormProduct from './pages/FormProduct';
import ProductTable from './pages/ProductTable';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CategoryPage from './pages/CategoryPage';
import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';
import ProtectedRoute from './components/ProtectedRoute';
import UserTable from './pages/UserTable';
import Dashboard from "./pages/ProductTable";
import DashboardPage from "./pages/DashboardPage";
import Signupuserdashboard from "./pages/Signupuserdashboard";
import CategoryDashboard from "./pages/CategoryDashboard";





function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load token from localStorage on app start
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({ type: "LOAD_TOKEN", payload: token });
      dispatch(profileUser());
    }
  }, [dispatch]);

  return (
    <div>
        <BrowserRouter>
        <Routes >
          <Route  element={<MainLayout />}>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"/service"} element={<ServicePage />} />
            <Route path={"/contact"} element={<ContactPage />} />
            <Route path={"/category/:id"} element={<CategoryPage />} />
            <Route
              path={"/products/:id"}
              element={
                <ProtectedRoute>
                  <ProductDetailPage />
                </ProtectedRoute>
              }
            />
          </Route>
          
          <Route  element={<MainDashboard />}>
            {/* <Route path={"/dashboard"} element={<DashboardPage />} /> */}
            <Route path={"/dashboardcategory"} element={<CategoryDashboard />} />
            <Route path={"/producttable"} element={<ProductTable />} />
            <Route path={"/usertable"} element={<UserTable />} />
            <Route path={"/createproduct"} element={<FormProduct edit={false} />} />
            <Route path={"/editproduct"} element={<FormProduct  edit={true}/>} />
            <Route path={"/editsignupuser"} element={<Signupuserdashboard edit={true}/>} />  
            <Route path={"/signupuser"} element={<Signupuserdashboard  edit={false}/>} /> 
          </Route>


          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/profile"} element={<ProfilePage/>} />
          <Route path={"/signup"} element={<SignupPage edit={false}/>} /> 
          <Route path={"*"} element={<NotFoundPage />} /> 
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

function MainLayout(){
  return(
     <>
        <HeaderComponent />
          <Outlet />
        <FooterComponent />
     </>
  )
}

function MainDashboard(){
  return(
    <>
      <DashboardPage />
      <Outlet />
    </>
  )
}