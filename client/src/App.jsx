import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from "./pages/Auth"
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice'
import InterviewPage from './pages/InterviewPage'
import InterviewHistory from './pages/InterviewHistory'
import Pricing from './pages/Pricing'
import InterviewReport from './pages/InterviewReport'

export const ServerUrl =
  window.location.hostname === "localhost"
    ? "http://localhost:8000"
    : "https://ai-interview-agent-r4gx.onrender.com";

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    const checkBackend = async () => {
      if (window.location.hostname === "localhost") {
        try {
          // Attempt a quick ping to the local backend
          await axios.get("http://localhost:8000/api/health", { timeout: 1000 });
          console.log("Using local backend (localhost:8000)");
        } catch (e) {
          console.warn("Local backend not found. Falling back to production URL.");
          // If local fails, we need to update the ServerUrl. 
          // Since ServerUrl is an export, we can't change it easily, 
          // but we can ensure future requests in this session use production.
          window._serverUrl = "https://ai-interview-agent-r4gx.onrender.com";
        }
      }
    };
    
    const getUser = async () => {
      await checkBackend();
      const activeUrl = window._serverUrl || ServerUrl;
      try {
        const result = await axios.get(activeUrl + "/api/user/current-user", {
          withCredentials: true,
        });
        if (result.data) {
          dispatch(setUserData(result.data));
        } else {
          dispatch(setUserData(null));
        }
      } catch (error) {
        if (
          error.response &&
          error.response.status !== 401 &&
          error.response.status !== 400
        ) {
          console.log(error);
        }
        dispatch(setUserData(null));
      }
    };
    getUser();
  }, [dispatch]);
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/interview' element={<InterviewPage/>}/>
      <Route path='/history' element={<InterviewHistory/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/report/:id' element={<InterviewReport/>}/>



    </Routes>
  )
}

export default App
