import { useEffect } from "react";
import { Redirecting } from "./redirecting";

const RedirectLinkedIn = () => {
    useEffect(() => {
      window.location.replace('https://www.linkedin.com/in/cassandra-sibley-210b251a2/');
    }, [])
    return (
        <Redirecting />
    )
}

export default RedirectLinkedIn