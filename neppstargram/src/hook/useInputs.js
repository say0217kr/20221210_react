import { useState } from "react";

export const useInputs = (initialState) => {
    const [inputs, setInputs] = useState(initialState);

    const handleInputs = (e) => {
        const { name, value } = e.target;

        setInputs({ ...inputs, [name]: value });
    };

    const reset = () => {
        setInputs(initialState);
    };

    return [inputs, handleInputs, reset];
};
