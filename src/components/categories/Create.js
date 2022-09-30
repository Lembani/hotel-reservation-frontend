/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import FormContext from '../../context/FormContext';
import { useAddCategoryMutation } from '../../redux/api-functions/categories';
import Form from './Form';

const CreateCategory = () => {
  const { values, setShowForm } = useContext(FormContext);
  const [addCategory] = useAddCategoryMutation();
  // const navigate = useNavigate();

  const handleAddCategory = (e) => {
    const { name, description, rating } = values;
    e.preventDefault();
    addCategory({
      name,
      description,
      rating,
    });
    setShowForm(false);
    // navigate('/');
  };

  return <Form handleAddCategory={handleAddCategory} />;
};
export default CreateCategory;
