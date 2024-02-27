import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import './App.css'
import Board from './Board'
// import { fetchTodos } from './redux/Counter';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import { fetchHighscore, setUser } from './redux/slices/userSlice';

function App() {
  // const [gameStart, setGameStart] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageUser = localStorage.getItem("user");
    const userJson = localStorageUser;
    if (userJson) {
      dispatch(setUser(userJson))
    }
  },[])

  useEffect(() => {
    dispatch(fetchHighscore())
  }, [])

  // const state = useSelector(state => state)
  const user = useSelector(state => state.user.user)
  console.log("User here", user)
  
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={!user ? <Navigate to="/login" /> : <Board/>} />
        {/* <Route path="/signup" element={!user  ? <Signup /> : <Navigate to="/" />} /> */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
