import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from "../../firebase"

const auth = getAuth(app);

const Login = ({ switchToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with email:', email, 'and password:', password);
  };

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        Swal.fire({
          icon: 'success',
          title: 'Login Successfully',
          text: 'Your account has been logged in successfully!',
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,  // Display error message
        });
      });
  };

  return (
    <div className="p-8">
      <h2 className="text-4xl font-semibold mb-8 hover:underline">Log In</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="mb-6">
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
          onClick={loginUser}
          className="w-full bg-slate-500 hover:bg-slate-700 text-white font-bold py-3 rounded-lg"
        >
          Log In
        </button>
      </form>
    </div>











  );
};

export default Login;
