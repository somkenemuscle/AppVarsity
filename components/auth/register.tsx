'use client';

import { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [formData, setFormData] = useState({ email: '', username: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');

        if (!formData.email || !formData.username) {
            return setMessage('Please fill in all fields.');
        }

        try {
            const res = await axios.post('/api/auth/register', formData);
            localStorage.setItem('email', res.data.email);
            setMessage('✅ Registered successfully!');
            setFormData({ email: '', username: '' });
        } catch (err: any) {
            setMessage(`❌ ${err.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
            />
            <input
                name="username"
                type="text"
                required
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border p-2 rounded"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Register
            </button>
            {message && <p className="mt-2 text-sm">{message}</p>}
        </form>
    );
};

export default RegisterForm;
