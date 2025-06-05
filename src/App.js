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

function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes >
          <Route  element={<MainLayout />}>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/datatable"} element={<Dashboard />} />
            <Route path={"/create"} element={<FormProduct edit={false} />} />
            <Route path={"/edit"} element={<FormProduct  edit={true}/>} />
            <Route path={"products/:id"} element={<ProductDetailPage />} /> 
          </Route>
          
        
         
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
