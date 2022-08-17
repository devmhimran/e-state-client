import React, { useState } from 'react';

const SearchBar = () => {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [propertType, setPropertyType] = useState('');

    console.log(location, date, price, propertType);

    const handleSearch = (e) =>{
        e.preventDefault();
        const locationValue = e.target.location.value;
        const dateValue = e.target.date.value;
        const priceValue = e.target.price.value;
        const propertyTypeValue = e.target.propertyType.value;

        setLocation(locationValue);
        setDate(dateValue);
        setPrice(priceValue);
        setPropertyType(propertyTypeValue);
    }

    return (
        <form className='flex' onSubmit={handleSearch}>
            <div className="stats stats-vertical w-full mt-8 lg:stats-horizontal">
                <div className="stat">
                    <div className="stat-title mb-2">Location</div>
                    <input className='input input-ghost w-full max-w-xs text-xl font-semibold' type="text" placeholder='Enter Location' name='location'></input>
                </div>

                <div className="stat">
                    <div className="stat-title mb-2">When</div>
                    <input className='input input-ghost w-full max-w-xs text-xl font-semibold' type="date" name="date" placeholder='When'></input>
                </div>

                <div className="stat">
                    <div className="stat-title mb-2">Price</div>
                    <select className="select w-full max-w-xs text-xl" name='price'>
                        <option defaultValue={2500}>$500-$2500</option>
                        <option>$2500-$3000</option>
                        <option>$3500-$4000</option>
                        <option>$4500-$5000</option>
                    </select>
                </div>

                <div className="stat">
                    <div className="stat-title mb-2">Property Type</div>
                    <select className="select w-full max-w-xs text-xl" name='propertyType'>
                        <option defaultValue={"Houses"}>Houses</option>
                        <option>Houses</option>
                    </select>
                </div>

                <div className="stat">
                    <div className="search__button flex items-center">
                        <input type='submit' className="btn btn-xs btn-primary sm:btn-sm md:btn-md lg:btn-lg" name='search' value="Search"></input>
                    </div>
                </div>

            </div>
        </form>
    );
};

export default SearchBar;