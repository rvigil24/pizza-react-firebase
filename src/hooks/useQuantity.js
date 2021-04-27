import {useState} from "react";

export const useQuantity = (defaultQuantity) => {
    const [value, setValue] = useState(defaultQuantity || 1);

    
    const onChange = (e) => {
        if(+e.target.value >=1) return setValue(e.target.value);
        setValue(1);
    }

    return {
        value,
        setValue,
        onChange
    }

}