import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from "../../firebase"

const auth = getAuth(app)

const SignUp = ({ switchToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const createUser = () => {
    // Create a new user
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        Swal.fire({
          icon: 'success',
          title: 'Sign Up Successful',
          text: 'Your account has been created successfully!',
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Sign Up Failed',
          text: error.message,
        });
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Signed Up: ', username, email, password);
  };

  return (
    <div className="p-8">
      <h2 className="text-4xl font-semibold mb-8 hover:underline">Sign Up</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label htmlFor="name" className='text-xl mt-1 mb-2 pb-2 text-gray-900'>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 text-xl border border-gray-400 rounded-lg active:border-slate-700 focus:border-teal-950 hover:border-teal-900"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className='text-xl mt-1 text-gray-900'>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 text-xl border border-gray-400 rounded-lg active:border-slate-700 focus:border-teal-950 hover:border-teal-900"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className='text-xl mt-1 text-gray-900'>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 text-xl border border-gray-400 rounded-lg active:border-slate-700 focus:border-teal-950 hover:border-teal-900"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          onClick={createUser}
          className="w-full bg-slate-500 hover:bg-slate-700 text-white font-bold py-3 rounded-lg "
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
