import './App.css';
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import NewLogin from './pages/login/NewLogin';
import PrivateRouter from './components/PrivateRouter';


function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route element ={<PrivateRouter/>}>
            <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          </Route>

            <Route path='/login' element={<SimpleLayout><Login/></SimpleLayout>} />
            <Route path='/cadastro' element={<SimpleLayout><NewLogin/></SimpleLayout>} />
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
