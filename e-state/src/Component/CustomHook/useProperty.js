import React, { useEffect, useState } from 'react';

const useProperty = () => {
    const [property, setProperty] = useState({})
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/devmhimran/dummy-api/main/E-State-Api/data.json')
            .then(res => res.json())
            .then(data => setProperty(data))
    }, []);
    return [property, setProperty];
};

export default useProperty;