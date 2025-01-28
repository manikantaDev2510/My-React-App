import React, { useState } from 'react';
import { app } from './firebaseCong';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const loginWithFireBase = getAuth(app);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginSuccess = await signInWithEmailAndPassword(loginWithFireBase, email, password);
            alert('Login Successful');
            navigate('/home'); // Use navigate to redirect
        } catch (error) {
            console.error(error);
            alert('Login failed. Please check your credentials.');
        }

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
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
