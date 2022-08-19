import React, { useEffect, useState } from 'react';
import Properties from '../Properties/Properties';
import SearchBar from '../SearchBar/SearchBar';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const [property, setProperty] = useState([]);
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const priceInt = parseInt(price);
    const notFoundMessage = <>
        <div>
            <h2>notFoundMsg</h2>
        </div>
    </>
    console.log(property.propertyType);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/devmhimran/dummy-api/main/E-State-Api/data.json')
            .then(res => res.json())
            .then(data => setProperty(data))
    }, []);
    console.log(location, price, date)
    return (
        <div className="home__main bg-violet-50 py-24">
            <div className="w-8/12 mx-auto">
                <div className='container mx-auto'>
                    <div className="heading__main flex justify-between">
                        <div className="heading__title">
                            <h1 className='text-4xl font-bold'>Search properties for rent</h1>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <select className="select select-bordered">
                                <option defaultValue={"Search With Search Bar"}>Search With Search Bar</option>
                                <option>Search With Search Bar</option>
                            </select>
                        </div>
                    </div>
                    <SearchBar
                        location={location}
                        setLocation={setLocation}
                        date={date}
                        setDate={setDate}
                        price={price}
                        setPrice={setPrice}
                        propertyType={propertyType}
                        setPropertyType={setPropertyType}
                    ></SearchBar>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10">
                        {
                            property.filter((propertyData) => {
                                return propertyData.location === '' ? propertyData
                                    : propertyData.location.toLowerCase().match(location.toLowerCase()) ? propertyData
                                        : console.log('not found')
                            }).filter(data => {
                                return price === '' ? data
                                    : data.price <= priceInt ? data
                                        : console.log('data');
                            }).map(propertyData => <Properties key={propertyData.id} propertyData={propertyData}></Properties>)
                        }
{/* .filter(data => {
                                return data.propertyType ? data : console.log('not found')
                            }) */}
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Home;