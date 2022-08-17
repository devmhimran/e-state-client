import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
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
                                <option  defaultValue={"Search With Search Bar"}>Search With Search Bar</option>
                                <option>Search With Search Bar</option>
                            </select>
                        </div>
                    </div>
                    <SearchBar></SearchBar>
                </div>
            </div>
        </div>

    );
};

export default Home;