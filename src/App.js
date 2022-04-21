import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/Authantication/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        } />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/register' element={<Register></Register>}>
        </Route>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/*' element={<NotFound></NotFound>} />
        
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
