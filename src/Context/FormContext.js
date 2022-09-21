/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [values, setValues] = useState({
    name: '',
    description: '',
    rating: null,
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      [e.target.description]: e.target.value,
      [e.target.rating]: e.target.value,
    });
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleClose = (e) => {
    e.preventDefault();
    closeForm();
    localStorage.clear();
  };
  return (
    <FormContext.Provider value={{
      values, setValues, handleChange, handleClose, showForm, setShowForm,
    }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
