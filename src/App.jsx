import React,{useEffect} from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Home from './Pages/Home.jsx';
import BookAppointment from "./Pages/BookAppointment";
import Service from "./Pages/Service";
import PageNotFound from './Pages/PageNotFound.jsx';
import { useDispatch, useSelector } from "react-redux";
import { clearError, clearMessage } from "./redux/reducers/userReducer";
import { loadUser } from "./redux/action/user";
import { ProtectedRoute } from "protected-route-react";
import Login from "./Auth/Login.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import YoutubeShorts from "./Admin/YouTubeVideo.jsx";
import Navbar from "./Pages/Navbar.jsx";
// import { Slider } from 'antd';
import SliderImage from './Admin/SliderImage'
import UserManagement from './Admin/UserMangement.jsx';
import AdminDashboard from './Admin/AdminDashboard';
import Appointment from './Admin/Appointment.jsx';

function App() {
   // Checking user state
  const { isAuthenticated, user, error, message } = useSelector(
    (state) => state.user
  );
  const { message: sliderMessage } = useSelector((state) => state.slider);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.info(message);
      dispatch(clearMessage());
    }
  }, [dispatch, message]);

 
  // console.log(user);

 
  return (
    <>
     <Router>
        <Routes>
          {user && user.role === "admin" ? (
            <>
              {/* Admin Routes */}
              <Route
                path="/"
                element={<Home user={user} isAuthenticated={isAuthenticated} />}
              />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/sliderimage" element={<SliderImage />}/>
              <Route path="/admin/youtubeshorts" element={<YoutubeShorts/>} />
              <Route path="/admin/usermanagement" element={<UserManagement/>}/>
              <Route path="/admin/appointment" element={<Appointment/>}/>

            </>
          ) : isAuthenticated ? (
            <>
              {/* User Routes */}
              <Route
                path="/"
                element={<Home user={user} isAuthenticated={isAuthenticated} />}
              />
              <Route path="/" element={<><MainLayout /></>} />
           <Route path="/home" element={<><MainLayout /></>} />           
           <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
           <Route path="/service" element={<><Navbar /><Service /><Footer /></>} />
           <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />           
           <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />           
           <Route path="/appointment" element={<><Navbar /><Appointment /><Footer /></>} />
          
              {/* <Route path="food" element={<Food />}>
                <Route path="/food/restaruant" element={<Restaurant />}></Route>
                <Route path="/food/streetfood" element={<StreetFood />}></Route>
                <Route
                  path="/food/lunchWithStar"
                  element={<LunchwithStar />}
                ></Route> */}
              {/* </Route> */}

              {/* <Route path="/travel" element={<Travel />}>
                <Route path="/travel/spiritual" element={<Spiritual />}></Route>
                <Route path="/travel/national" element={<National />}></Route>
                <Route
                  path="/travel/international"
                  element={<International />}
                ></Route>
                <Route path="travel/category" element={<Category />} />
              </Route> */}
              {/* <Route path="/familyfun" element={<FamilyFun />}>
                <Route path="/familyfun/challenge" element={<Challenge />} />
                <Route path="/familyfun/rahanVeg" element={<RahanVeg />} />
                <Route path="/familyfun/oreeMummy" element={<OreeMummy />} />
              </Route> */}

              {/* <Route path="/:title" element={<DynamicPage />} /> */}

              <Route path="*" element={<PageNotFound />} />
            </>
          ) : (
            <>
              {/* All accessable routes */}
              <Route
                path="/login"
                element={
                  <ProtectedRoute isAuthenticated={!isAuthenticated}>
                    <Login />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/"
                element={<Home user={user} isAuthenticated={isAuthenticated} />}
              />
               <Route path="/" element={<><MainLayout /></>} />
           <Route path="/home" element={<><MainLayout /></>} />           
           <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
           <Route path="/service" element={<><Navbar /><Service /><Footer /></>} />
           <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />           
           <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />           
           <Route path="/bookappointment" element={<><Navbar /><BookAppointment /><Footer /></>} />
          
              {/* Dynamic Route */}
              {/* <Route path="/:title" element={<DynamicPage />} /> */}

              <Route path="*" element={<PageNotFound />} />
            </>
          )}
        </Routes>
      </Router>
      <ToastContainer/>
    </>
    
//     <BrowserRouter>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<><Navbar /><MainLayout /><Footer /></>} />
//           <Route path="/home" element={<><Navbar /><MainLayout /><Footer /></>} />
//           <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
//           <Route path="/service" element={<><Navbar /><Service /><Footer /></>} />
//           <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
//           <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />
//           <Route path="/bookappointment" element={<><Navbar /><BookAppointment /><Footer /></>} />
          
//           {/* Protected Routes */}
//           <Route
//             path="/user/dashboard"
//             element={
//               <ProtectedRoute allowedRoles={['user']}>
//                 <UserDashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/admin/dashboard/*"
//             element={
//               <ProtectedRoute allowedRoles={['admin']}>
//                 <AdminDashboard />
//               </ProtectedRoute>
//             }
//           />

//           {/* Authentication Routes */}
//           <Route 
//             path="/login" 
//             element={user ? (
//               user.role === 'admin' ? <Navigate to="/admin/dashboard" /> : <Navigate to="/user/dashboard" />
//             ) : <Login />} 
//           />
//           <Route path="/register" element={<Register />} />

//           {/* Redirect to home if no matching route */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       )}
//     </BrowserRouter>
//   );
// }

        )
      }
export default App;
