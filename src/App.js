import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './pages/footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import Navbar from './pages/Navbar/Navbar';
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/SignUp/SignUp'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/myportfolio' element={<MyPortfolio />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
