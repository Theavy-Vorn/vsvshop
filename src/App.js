import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Route ,Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ProductDetailPage from './pages/ProductDetailPage';
import FormProduct from './pages/FormProduct';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CategoryPage from './pages/CategoryPage';
import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes >
          <Route  element={<MainLayout />}>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"/service"} element={<ServicePage />} />
            <Route path={"/contact"} element={<ContactPage />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path={"/datatable"} element={<Dashboard />} />
            <Route path={"/create"} element={<FormProduct edit={false} />} />
            <Route path={"/edit"} element={<FormProduct  edit={true}/>} />
            <Route path={"products/:id"} element={<ProductDetailPage />} /> 
          </Route>
          
        
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/profile"} element={<ProfilePage/>} />
          <Route path={"/signup"} element={<SignupPage />} />  
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
