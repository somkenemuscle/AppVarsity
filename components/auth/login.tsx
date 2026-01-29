'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');

        if (!email) {
            return setMessage('Please enter your email.');
        }

        try {
            const res = await axios.post('/api/auth/login', { email });
            localStorage.setItem('email', res.data.email);
            setMessage('✅ Login successful!');
            setEmail('');
            router.push('/');
        } catch (err: any) {
            setMessage(`❌ ${err?.response?.data?.message || err.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded"
                required
            />
            <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded"
            >
                Login
            </button>
            {message && <p className="mt-2 text-sm">{message}</p>}
        </form>
    );
};

export default LoginForm;
