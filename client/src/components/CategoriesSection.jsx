import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import Card from './Card';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
const CategoriesSection = () => {

    const [category, setCategory] = useState(null)

    // console.log(category)
    useEffect(() => {

        fetch('https://galary-backend-1.onrender.com/categories')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setCategory(data)
            })
    }, [])

    return (

        <div className=' w-11/12 m-auto '>
            <div className=''>
                <Fade>
                    <h1 className='text-center text-3xl lg:text-5xl font-serif font-bold mt-20 mb-5 text-orange-600'>Art & Craft Categories</h1>
                    <p className='font-serif font-bold mt-8 mb-5 text-center'>This is the category that you can see in our website where we try to show you the latest arts and craft</p>
                </Fade>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    category?.map((data) => <Card key={data._id} data={data}></Card>)
                }
            </div>

        </div>

    );
};

export default CategoriesSection;