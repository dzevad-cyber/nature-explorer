import { useState } from 'react';

const useForm = callback => {
  const [state, setState] = useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
    callback();
  };

  return { state, handleChange, handleSubmit };
};

export default useForm;
