import React, { useState } from 'react';
import Login from './components/Login/Login';
import SignUp from './components/Signup/Signup';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./firebase.js"

const auth = getAuth(app);

const App = () => {

  const signupUser = () => {
    createUserWithEmailAndPassword(auth,
      'amnakashif.dev@gmail.com',
      'amna@123'
    ).then((value) => console.log(value));
  }

  const [isLogin, setIsLogin] = useState(true);

  const switchToSignUp = () => {
    setIsLogin(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg">
        {isLogin ? (
          <Login switchToSignUp={switchToSignUp} />
        ) : (
          <SignUp switchToLogin={switchToLogin} />
        )}

        <div className="text-center mt-4">
          {isLogin ? (
            <p className='mb-5'>
              Don't have an account?{' '}
              <button
                onClick={switchToSignUp}
                className="text-slate-500 font-bold hover:text-blue-700 hover:underline"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p className='mb-5'>
              Already have an account?{' '}
              <button
                onClick={switchToLogin}
                className="text-slate-500 font-bold hover:text-blue-700 hover:underline"
              >
                Log In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;