import React from 'react';
import { MdOutlineBed } from 'react-icons/md';
import { FaShower } from 'react-icons/fa';
import { IoIosResize } from 'react-icons/io';

const PropertySingleDetail = ({ propertyData }) => {
    const { id, name, location, price, bed, bathroom, space, tag, img } = propertyData;
    console.log(propertyData)
    return (
        <div className='container mx-auto py-16'>
            <div class="grid grid-cols-2 gap-4">
                <div className="single__property">
                    <img className='rounded-lg' src={img} alt="" />
                </div>
                <div className="single__property__detail flex items-center">
                    <div className="card shadow w-full">
                        <div className="card-body">
                            <div className="single__property__detail__main">
                                <div class="badge badge-primary">{tag}</div>
                                <p className='text-3xl font-bold my-3 text-violet-500'>Price: ${price}</p>
                                <p className='text-2xl my-3'>Name: <span className='font-semibold'>{name}</span></p>
                                <p className=' my-3'>Location: {location}</p>
                                <p className='text-2xl my-3 flex items-center font-semibold'>
                                    <span className='text-3xl mr-3 text-violet-500'><MdOutlineBed></MdOutlineBed></span> {bed} Bed
                                </p>
                                <p className='text-2xl my-3 flex items-center font-semibold'>
                                    <span className='text-3xl mr-3 text-violet-500'><FaShower></FaShower></span>{bathroom} Bathroom 
                                </p>
                                <p className='text-2xl my-3 flex items-center font-semibold'>
                                    <span className='text-3xl mr-3 text-violet-500'><IoIosResize></IoIosResize></span>{space} m<sup>2</sup>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertySingleDetail;