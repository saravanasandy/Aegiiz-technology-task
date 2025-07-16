import React, { useState } from 'react';
import API from '../Api';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/auth/login', form);
    localStorage.setItem('token', res.data.token);
    navigate('/dashboard');
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <form onSubmit={handleSubmit} className='w-25 p-4 border rounded'>
        <h3 className='text-center mb-4'>Login</h3>

        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='email'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div className='mb-3'>
          <input
            type='password'
            className='form-control'
            placeholder='password'
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>

        <button type='submit' className='btn btn-success w-100'>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
