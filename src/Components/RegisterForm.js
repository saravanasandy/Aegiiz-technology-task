import React, { useState } from 'react';
import API from '../Api';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/auth/register', form);
    alert('Registration Successful');
    navigate('/login');
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <form onSubmit={handleSubmit} className='p-4 border rounded w-25'>
        <h3 className='text-center mb-4'>Register</h3>

        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='name'
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

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

        <button type='submit' className='btn btn-primary w-100 mb-2'>
          Register
        </button>

        <div className='text-center'>
          <span>Already registered? </span>
          <button
            type='button'
            className='btn btn-link p-0'
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
