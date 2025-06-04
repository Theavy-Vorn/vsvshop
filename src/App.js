import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Route ,Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ProductDetailPage from './pages/ProductDetailPage';
import FormProduct from './pages/FormProduct';
import Dashboard from './pages/Dashboard';

function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes >
          <Route  element={<MainLayout />}>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/create"} element={<FormProduct />} />
            <Route path={"/datatable"} element={<Dashboard />} />
          </Route>
          
        
          <Route path={"products/:id"} element={<ProductDetailPage />} /> 
         
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
