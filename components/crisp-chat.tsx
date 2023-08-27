import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";


export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("CRISP_WEBSITE_ID")
    }, []);

    return null;
}