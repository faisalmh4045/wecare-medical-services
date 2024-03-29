import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/C181111Faisal/fakeServices/main/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return[services];
}
export default useServices;