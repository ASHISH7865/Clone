import{ useSelector } from 'react-redux'; 
import './App.css'
import Homepage from './pages/HomePage/Homepage';
import Login from './pages/Login/Login';
import { selectUser } from './redux/userSlice';

function App() {

  const user  = useSelector(selectUser)
  console.log(user)

  return (
    <div className="App">
      {!user ? ( <Homepage />) : null}
    </div>
  );
}

export default App;
