import { getAuth } from "firebase/auth";
import './App.css';
import app from './firebase.init';

const auth = getAuth(app)

const handelEmailBlur = event => {
  console.log(event.target.value);
}


const handelPasswordBlur = event => {

  console.log(event.target.value);
}

const handelFromSubmit = event => {
  console.log('anik submited');
  event.preventDefault();
}


function App() {
  return (
    <div className="App">
      <form onSubmit={handelFromSubmit}>
        <input onBlur={handelEmailBlur} type="email" name="" id="" /><br />
        <input onBlur={handelPasswordBlur} type="password" name="" id="" /><br />

        <input type="submit" value="login" />

      </form>
    </div>
  );
}

export default App;
