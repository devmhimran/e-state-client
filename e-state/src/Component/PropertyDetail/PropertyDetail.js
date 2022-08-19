import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropertySingleDetail from '../PropertySingleDetail/PropertySingleDetail';

const PropertyDetail = () => {
    const {id} = useParams();
    const [property, setProperty] = useState([]);
    let propertySave = [];

   

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/devmhimran/dummy-api/main/E-State-Api/data.json')
            .then(res => res.json())
            .then(data => setProperty(data))
    }, []);


    const propertyData = property.find(searchData => searchData.id === id);
    console.log(propertyData)
    console.log(propertySave)
    if(propertyData){
        propertySave.push(propertyData);
    }

    return (
        <div>
            {
                propertySave.map(data => <PropertySingleDetail propertyData={data}></PropertySingleDetail>)
            }
            
        </div>
    );
};

export default PropertyDetail;