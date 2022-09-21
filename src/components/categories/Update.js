/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { useUpdateCategoryMutation } from '../../Redux/APIFunctions/categories';
import Form from './Form';
import FormContext from '../../Context/FormContext';

const UpdateCategory = ({ category }) => {
  const [updateCategory] = useUpdateCategoryMutation();
  const { values, setShowForm } = useContext(FormContext);

  const handleUpdateCategory = (e) => {
    const { name, description, rating } = values;
    e.preventDefault();
    updateCategory({
      ...category,
      name,
      description,
      rating,
    });
    setShowForm(false);
  };

  return <Form handleAddCategory={handleUpdateCategory} />;
};

export default UpdateCategory;
