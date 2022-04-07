import { getAuth } from "firebase/auth";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import app from './firebase.init';
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";

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
      <h2 className="text-secondary">Register Please !!</h2>
      <section className="w-50 mx-auto mt-4 border p-2 rounded">

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default App;
