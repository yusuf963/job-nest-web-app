import { useState } from 'react';

const useForm = (initialState = {}) => {
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    return {
        formData,
        handleInputChange
    };
};

export default useForm;