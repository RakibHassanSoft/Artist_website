import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {data}= props
    // console.log(data)
    const {subcategory_Name,description,image} = data
    // console.log(category,image,name)
    // console.log(data)
    return (

        <Link to={`/categoryDetails/${data._id}`}>
        <div  className='bg-blue-400 '>
            <div className=''>
                <img className='h-[24rem] w-full' src={image} alt="Here is image" />
            </div>
            <div>
                <h1 className='text-3xl text-center text-white font-bold'>{subcategory_Name}</h1>
                <h1 className='text-white font-bold text-center'>{description}</h1>
            </div>
        </div>
        </Link>


    );
};

export default Card;