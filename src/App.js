import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import app from './firebase.init';
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";
import { useState } from "react";

const auth = getAuth(app)


function App() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resgistered, setRegistered] = useState(false);

  const handelEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handelPasswordBlur = event => {

    setPassword(event.target.value);
  }
  const handelAlreadyRegistered = event => {

    setRegistered(event.target.checked)

  }

  const handelFromSubmit = event => {


    if (!/(?=.*[A-Z])/.test(password)) {

      setError('please give at least one uppercase character ');
      return;

    }
    setError('')

    if (resgistered) {

      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          setError(error.message)
        })

    }
    else {

      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.log(error)
          setError(error.message);
        })
    }

    event.preventDefault();
  }

  return (
    <div>

      <section className="w-50 mx-auto mt-4 border p-3 rounded">
        <h2 className="text-secondary text-center">{resgistered ? "Login" : 'register'} Please !!</h2>
        <Form onSubmit={handelFromSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter email" required />

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handelPasswordBlur} type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group onChange={handelAlreadyRegistered} className="mb-3  text-start" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Already registered ?" />
          </Form.Group>
          <h5 className="text-danger">{error}</h5>
          <Button variant="primary" type="submit">
            {resgistered ? 'login' : 'register'}
          </Button>
        </Form>
      </section>
    </div >
  );
}

export default App;
