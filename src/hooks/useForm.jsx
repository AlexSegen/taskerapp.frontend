import { useState } from "react";

export const useForm = (initialState) => {

    const [form, setForm] = useState(initialState);

    const resetForm = (data) => {
        setForm(data ? {...data} : {...initialState});
    }

    const handleChange = (e) => {
        const { name, value, attributes } = e.target;

        let newValue = {};
        
        if (attributes && attributes.formgroup) {
            const { value: attrVal } = attributes.formgroup;
            
            let tmpForm = {...form};
            const rest = {...form[attrVal], [name]: value };

            newValue = {
                ...tmpForm,
                [attrVal]: rest
            }
        } else {
            newValue = { [name]: value }
        }
        
        setForm({
            ...form,
            ...newValue
        });
    }

/*     useEffect(() => {
        setForm(initialState);
    }, [initialState])
 */
    return {
        form,
        resetForm,
        setForm,
        ...form,
        handleChange
    }
}