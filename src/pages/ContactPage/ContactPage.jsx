import { useState } from 'react';
import Button from '@mui/material/Button';

import Swal from 'sweetalert2';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado',
      text: '¡Gracias por contactarnos!',
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Contactanos</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mt-4 mx-auto">
        <div className="mb-2">
          <label htmlFor="name" className="block">Nombre y apellido:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>

        <div className="mb-2">
          <label htmlFor="email" className="block">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>

        <div className="mb-2">
          <label htmlFor="message" className="block">Mensaje:</label>
          <textarea id="message" value={message} onChange={handleMessageChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>

        <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Enviar</Button>
      </form>
    </div>
  );
};

export default ContactPage;