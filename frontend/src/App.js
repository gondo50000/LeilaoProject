import './App.css';
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import NewLogin from './pages/register/Register';
import PrivateRouter from './components/PrivateRouter';
import RecoPassoword from './pages/passoword/RecoPassoword';


function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route element ={<PrivateRouter/>}>
            <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          </Route>
            <Route path='/login' element={<SimpleLayout><Login/></SimpleLayout>} />
            <Route path='/newlogin' element={<SimpleLayout><NewLogin/></SimpleLayout>} />
            <Route path='/recopassoword' element={<SimpleLayout><RecoPassoword/></SimpleLayout>} />
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
