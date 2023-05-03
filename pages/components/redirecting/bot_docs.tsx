import { useEffect } from "react";
import { Redirecting } from "./redirecting";

const RedirectBotDocs = () => {
    useEffect(() => {
      window.location.replace('https://github.com/');
    }, [])
    return (
        <Redirecting />
    )
}

export default RedirectBotDocs
