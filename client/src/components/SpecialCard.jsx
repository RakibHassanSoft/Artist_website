import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import swal from 'sweetalert';

const SpecialCard = (props) => {
    const { data } = props
    // console.log(data)
    const { _id, name, subcategory_Name, description, customization, processing_time, stockStatus, price, imgUrl, image, item_name
    } = data;
// console.log(imgUrl)
    return (
        <div className="bg-slate-500 dark:bg-slate-50 w-full mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
            <div className="relative">
                <img
                    className="h-[35rem] w-full  transition ease-in-out duration-300 transform hover:scale-105 hover:shadow-outline"
                    src={imgUrl}
                    alt="Product Image"
                />


                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium hover:-right-24 hover:duration-1000 ">
                    SALE
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{name}</h3>
                <h3 className="text-lg font-medium mb-2">{subcategory_Name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                    {description}

                </p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">${price}</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        <Link to={`details/${_id}`}>View Details</Link>
                    </button>
                    
                    
                </div>
            </div>
        </div>

    );
};

export default SpecialCard;