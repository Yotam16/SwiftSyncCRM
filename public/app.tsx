import React, { useState } from 'react';
import { Lead } from '../src/models';


interface NewCustomerProps {
  onSubmit: (customerData: Lead) => void;
}



const NewCustomer: React.FC<NewCustomerProps> = ({ onSubmit }) => {
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
    onSubmit(formData);
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

return (
  <div>
    <h2>New Customer</h2>
    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  handleSubmit(e); 
  setFormData(prevData => ({
    ...prevData,
    createdAt: new Date(),
    updatedAt: new Date()
  }));
}}>
      <div>
        <label>First Name:</label>
        <input type="text" name="fname" value={formData.fname} onChange={(e) => setFormData({...formData, fname: e.target.value})} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lname" value={formData.lname} onChange={(e) => setFormData({...formData, lname: e.target.value})} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
      </div>
      <button type="submit">Add Customer</button>
    </form>
  </div>
);

};


interface EditCustomerProps {
  customer: Lead;
  onSubmit: (customerData: Lead) => void;
}

const EditCustomer: React.FC<EditCustomerProps> = ({ customer, onSubmit }) => {
  const [formData, setFormData] = useState<Lead>(customer);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h2>Edit Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
        </div>
        <div>
          <label>Name:</label>
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
  );
};


const App: React.FC = () => {
  const [customers, setCustomers] = useState<Lead[]>([]);

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
      <NewCustomer onSubmit={handleAddCustomer} />

      {customers.map(customer => (  //this part does not match the model yet!
        <div key={customer.id}>
          <span>Name: {customer.fname}</span>
          <span>Email: {customer.email}</span>
          <span>Phone: {customer.phone}</span>
          <span>Address: {customer.address}</span>
          <button onClick={() => handleEditCustomer(customer)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default App;
