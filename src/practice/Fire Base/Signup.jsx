import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from './firebaseCong';

export default function Signup() {
  const signUpDoneWithFireBase = getAuth(app);
  const route = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => { // Marking the function as async
    e.preventDefault();
    try {
      let a = await  createUserWithEmailAndPassword(signUpDoneWithFireBase, email, password);
      alert('Sign up done successfully');
      console.log(a);
    } catch (error) {
      console.log(error);
    }
    route('/login');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email here"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Enter password here"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Signup</button>
      </form>
    </div>
  );
}
