import {useState} from "react";

export const useOrderDialog = () => {
    const [openOrderDialog, setOpenOrderDialog] = useState();

    return {
        openOrderDialog, setOpenOrderDialog
    }
}