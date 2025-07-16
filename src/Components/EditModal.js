import React, { useState } from 'react';
import API from '../Api';

const EditModal = ({ initialData, onClose, onUpdate }) => {
  const [form, setForm] = useState(initialData);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await API.patch(`/details/${form._id}`, form);
    onClose();
    onUpdate();
  };

  return (
    <div
      className='modal d-block'
      tabIndex='-1'
      style={{ background: '#00000055' }}
    >
      <div className='modal-dialog'>
        <div className='modal-content p-3'>
          <h5>Edit Record</h5>
          <form onSubmit={handleUpdate}>
            <div className='mb-2'>
              <input
                className='form-control'
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className='mb-2'>
              <input
                className='form-control'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className='mb-2'>
              <input
                className='form-control'
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
            </div>

            <div className='d-flex justify-content-between'>
              <button type='submit' className='btn btn-success'>
                Update
              </button>
              <button className='btn btn-secondary' onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
