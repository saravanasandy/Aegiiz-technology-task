import React, { useEffect, useState } from 'react';
import API from '../Api';
import EditModal from './EditModal';

const DetailsTable = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', location: '' });
  const [editing, setEditing] = useState(null);

  const fetchData = async () => {
    const res = await API.get('/details');
    setData(res.data.registers);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    await API.post('/details', form);
    setForm({ name: '', email: '', location: '' });
    fetchData();
  };

  const handleDelete = async (id) => {
    await API.delete(`/details/${id}`);
    fetchData();
  };

  return (
    <div className='container mt-5'>
      <h3>Register Details</h3>

     
      <form onSubmit={handleCreate} className='row g-2 mb-4'>
        <div className='col'>
          <input
            className='form-control'
            placeholder='Name'
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className='col'>
          <input
            className='form-control'
            placeholder='Email'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className='col'>
          <input
            className='form-control'
            placeholder='Location'
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
        </div>
        <div className='col-auto'>
          <button type='submit' className='btn btn-primary'>
            Add
          </button>
        </div>
      </form>

  
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry._id}>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.location}</td>
              <td>
                <button
                  className='btn btn-warning btn-sm me-2'
                  onClick={() => setEditing(entry)}
                >
                  Edit
                </button>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => handleDelete(entry._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      {editing && (
        <EditModal
          initialData={editing}
          onClose={() => setEditing(null)}
          onUpdate={fetchData}
        />
      )}
    </div>
  );
};

export default DetailsTable;
