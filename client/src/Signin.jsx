import React from 'react';
import { projectAuth, projectAuthProvider } from './firebase';

// Statics
import './Signin.css';

const Signin = ({ setUser }) => {
  // Hooks

  // Functions
  const handleSignin = () => {
    projectAuth
      .signInWithPopup(projectAuthProvider)
      .then(({ user }) =>
        setUser({ name: user.displayName, photo: user.photoURL })
      )
      .catch((err) => alert(err.message));
  };

  return (
    <div className="signin">
      <h1>Welcome to WhatsApp Clone</h1>
      <button onClick={handleSignin}>Sign in</button>
    </div>
  );
};

export default Signin;
