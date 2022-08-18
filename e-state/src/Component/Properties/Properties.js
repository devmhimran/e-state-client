import React from 'react';
import { useNavigate } from 'react-router-dom';

const Properties = ({propertyData}) => {
    const {id, name, location, price, bed, bathroom, space, tag, img } = propertyData;
    const navigate = useNavigate();
    const navigateId = (id) =>{
        navigate(`/property/${id}`);
    }
    // console.log(typeof(price))
    return (

        <div className="card w-full bg-base-100 shadow-xl relative">
            <div className="badge badge-primary absolute top-2.5 left-2.5">{tag}</div>
            <figure className='cursor-pointer' onClick={()=> navigateId(id)}><img className='w-full h-64 object-cover' src={img} alt={name} /></figure>
            <div className="card-body">
                <div className="price__main">
                    <h1 className='font-bold text-2xl'>${price} <span className='font-normal text-xs text-slate-400'>/month</span></h1>
                </div>
                <p className='font-normal text-base text-slate-500'>{location.slice(0,120)}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>


    );
};

export default Properties;