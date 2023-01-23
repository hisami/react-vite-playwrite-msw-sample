import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterUser: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await fetch('http://localhost:8000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, name })
        })
        navigate('/my-page');
      }}
    >
      <input
        type="email"
        name="email"
        onChange={(event) => setEmail(event.target.value)}
        data-test="emailInput"
      />
      <input
        type="name"
        name="name"
        onChange={(event) => setName(event.target.value)}
        data-test="nameInput"
      />
      <button type="submit" data-test="submitButton">Submit</button>
    </form >
  )
}