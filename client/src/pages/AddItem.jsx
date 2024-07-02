import React, { useContext } from 'react';
import CreateForm from '../components/CreateForm';
import SpecialCard from '../components/SpecialCard';
import { AuthContext } from '../Provider/AuthProvider';

const AddItem = () => {
  const {loading} = useContext(AuthContext)
  console.log(loading)
    return (
        
        <div>
            <CreateForm></CreateForm>
           
        </div>
    );
};

export default AddItem;