import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import Dashboard from './pages/Dashboard/Dashboard';
import MyProfile from './pages/Dashboard/MyProfile';
import Review from './pages/Dashboard/Review';
import Footer from './pages/footer/Footer';
import Home from './pages/Home/Home';
import PartDetail from './pages/Home/PartsDetail/PartDetail';
import Login from './pages/Login/Login'
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import Navbar from './pages/Navbar/Navbar';
import SignUp from './pages/SignUp/SignUp'
import RequireAuth from './shared/RequireAuth';
import NotFound from './pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import MyOrder from './pages/Dashboard/MyOrder';
import AllUser from './pages/Dashboard/AllUser';
import RequireAdmin from './shared/RequireAdmin';

function App() {
  return (
    <div className='max-w-7xl  mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/myportfolio' element={<MyPortfolio />}></Route>
        <Route path='/part/:partid' element={
          <RequireAuth>
          <PartDetail />
        </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrder />}></Route>
          <Route path='review' element={<Review />}></Route>
          <Route path='myprofile' element={<MyProfile />}></Route>
          <Route path='alluser' element={<RequireAdmin><AllUser /></RequireAdmin>}></Route>
        </Route>

        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
