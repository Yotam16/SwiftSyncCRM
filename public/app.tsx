import React, { useState } from 'react';
import { Lead } from '../src/models'
const App: React.FC = () => {

  const [customers, setCustomers] = useState<Lead[]>([]);

  const [formData, setFormData] = useState<Lead>({
    id: '',
    fname: '',
    lname: '',
    email: '',
    phone: '',
    address: '',
    status: '',
    source: '',
    notes: '',
    createdAt: new Date(),
    updatedAt: new Date()
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddCustomer(formData);
    setFormData({
      id: '',
      fname: '',
      lname: '',
      email: '',
      phone: '',
      address: '',
      status: '',
      source: '',
      notes: '',
      createdAt: new Date(),
      updatedAt: new Date()
    });
  };

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleEditCustomer(formData);
  };

  const handleAddCustomer = (customerData: Lead) => {
    setCustomers(prevCustomers => [...prevCustomers, customerData]);
  };

  const handleEditCustomer = (editedCustomer: Lead) => {
    setCustomers(prevCustomers =>
      prevCustomers.map(customer => (customer.id === editedCustomer.id ? editedCustomer : customer))
    );
  };

  return (
    <div>
      {/* New Customer Form */}
      <div>
        <h2>New Customer</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label>Phone:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <button type="submit">Add Customer</button>
        </form>
      </div>

      {/* Edit Customer Form */}
      <div>
        <h2>Edit Customer</h2>
        <form onSubmit={handleEditSubmit}>
          <div>
            <label>First Name:</label>
            <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label>Phone:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default App;
