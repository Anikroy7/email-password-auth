import { getAuth } from "firebase/auth";
import './App.css';
import app from './firebase.init';

const auth = getAuth(app)

function App() {
  return (
    <div className="App">
      <input type="email" name="" id="" />
      <input type="password" name="" id="" />
    </div>
  );
}

export default App;
