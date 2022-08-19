import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineBed } from 'react-icons/md';
import { FaShower } from 'react-icons/fa';
import { IoIosResize } from 'react-icons/io';

const Properties = ({propertyData}) => {
    const {id, name, location, price, bed, bathroom, space, tag, img } = propertyData;
    const navigate = useNavigate();
    const navigateId = (id) =>{
        navigate(`/property/${id}`);
    }
    // console.log(typeof(price))
    return (

        <div className="card card-compact w-full bg-base-100 shadow-md relative">
            <div className="badge badge-primary absolute top-2.5 left-2.5">{tag}</div>
            <figure className='cursor-pointer' onClick={()=> navigateId(id)}><img className='w-full h-64 object-cover' src={img} alt={name} /></figure>
            <div className="card-body">
                <div className="price__main">
                    <h2 className='font-bold text-2xl text-violet-500'>${price} <span className='font-normal text-xs text-slate-400'>/month</span></h2>
                </div>
                <div className="name__main">
                    <h3 className='font-bold text-xl'>{name}</h3>
                </div>
                <p className='font-normal text-base text-slate-500'>{location.slice(0,120)}</p>
                <hr className='my-3'></hr>
                <div className="card-actions justify-between">
                    <div className="bed flex items-center text-base">
                        <span className='text-violet-500 text-lg'><MdOutlineBed></MdOutlineBed></span>
                        <p className='ml-2 text-slate-500'>{bed} Beds</p>
                    </div>

                    <div className="bed flex items-center text-base">
                        <span className='text-violet-500 text-lg'><FaShower></FaShower></span>
                        <p className='ml-2 text-slate-500'>{bathroom} Bathroom</p>
                    </div>

                    <div className="bed flex items-center text-base">
                        <span className='text-violet-500 text-lg'><IoIosResize></IoIosResize></span>
                        <p className='ml-2 text-slate-500'>{space} m<sup>2</sup></p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Properties;