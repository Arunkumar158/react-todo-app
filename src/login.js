import { useState } from "react";
import { auth } from './firebase'; //Import Firebase auth
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut,} from "firebase/auth";


function Auth() {
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState('');

    const register = async () => {
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User registered:', userCredential.user);
            setIsLoggedIn(true);
        }catch (error){
            console.error('Error registering user:', error);

        }
    };
    const logout =async () => {
      await signOut(auth);
      setIsLoggedIn(false);

    };
    

    return (
        <div>
          {isLoggedIn ? (
            <div>
              <h2>Welcome, you're logged in!</h2>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <div>
              <h2>Login/Register</h2>
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <button onClick={register}>Register</button>
              
            </div>
          )}
        </div>
      );
    }
    
    export default Auth;
    
    
    