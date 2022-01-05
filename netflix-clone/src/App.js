import {useDispatch, useSelector} from 'react-redux';
import './App.css'
import Homepage from './pages/HomePage/Homepage';
import Login from './pages/Login/Login';
import { selectUser, logout , login} from './redux/userSlice';
import {useEffect} from "react";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged(user => {
      if(user){
        dispatch(login({
          uid:user.uid,
          email:user.email
        }))
      }
      else{
        dispatch(logout)
      }
    })
    return subscribe;
  }, );

  const user  = useSelector(selectUser)


  return (
    <div className="App">
      {!user ? ( <Homepage />) : null}
    </div>
  );
}

export default App;
