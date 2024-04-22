import React, { useState } from 'react';


interface NewCustomerProps {
  onSubmit: (customerData: CustomerData) => void;
}

interface CustomerData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const NewCustomer: React.FC<NewCustomerProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<CustomerData>({
    name: '',
    email: '',
    phone: '',
    address: ''
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
      name: '',
      email: '',
      phone: '',
      address: ''
    });
  };

  return (
    <div>
      <h2>New Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
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
  );
};


interface EditCustomerProps {
  customer: CustomerData;
  onSubmit: (customerData: CustomerData) => void;
}

const EditCustomer: React.FC<EditCustomerProps> = ({ customer, onSubmit }) => {
  const [formData, setFormData] = useState<CustomerData>(customer);

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
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
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
  const [customers, setCustomers] = useState<CustomerData[]>([]);

  const handleAddCustomer = (customerData: CustomerData) => {
    setCustomers(prevCustomers => [...prevCustomers, customerData]);
  };

  const handleEditCustomer = (editedCustomer: CustomerData) => {
    setCustomers(prevCustomers =>
      prevCustomers.map(customer => (customer.id === editedCustomer.id ? editedCustomer : customer))
    );
  };

  return (
    <div>
      <NewCustomer onSubmit={handleAddCustomer} />
      {/* Example: Render a list of customers */}
      {customers.map(customer => (
        <div key={customer.id}>
          <span>Name: {customer.name}</span>
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
