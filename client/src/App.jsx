import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useEffect } from "react";
import axios from "axios";
import {useDispatch} from 'react-redux'
import { setuserData } from "./redux/userSlice";
import InterviewPage from "./pages/InterviewPage";
export const serverUrl = "http://localhost:3000/";
const App = () => {

  const dispatch = useDispatch(); 
  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(`${serverUrl}api/user/current-user`, {
          withCredentials: true,
          
        });

        dispatch(setuserData(result.data))
       
      } catch (error) {
        console.log(error);
        dispatch(setuserData(null))

      }
    };
    getUser();
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/interview" element={<InterviewPage />} />
    </Routes>
  );
};

export default App;
