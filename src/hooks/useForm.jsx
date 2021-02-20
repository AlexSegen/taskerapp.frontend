import { useState, useEffect } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const names = name.split(".");

    let newValue = {};
    let tmpForm = { ...form };

    if (names.length > 1) {
      const rest = { ...tmpForm[names[0]], [names[1]]: value };

      newValue = {
        ...tmpForm,
        [names[0]]: rest,
      };
    } else {
      newValue = { [name]: value };
    }

    setForm({
      ...form,
      ...newValue,
    });
  };

  useEffect(() => {
    setForm(initialState);
  }, [initialState]);

  return {
    form,
    setForm,
    ...form,
    handleChange,
  };
};
