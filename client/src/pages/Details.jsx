import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Details = () => {

    const loadedData = useLoaderData()
    const [datas, setDatas] = useState(loadedData)
    // console.log(loadedData)


    const { itemId } = useParams()
    // console.log(itemId)

    const singleData = datas.find(d => d?._id === itemId);
    // console.log(singleData)

    const { user_name,imgUrl, User_email, description, image, item_name, price, processing_time, rating, stockStatus, subcategory_Name } = singleData;
    return (
        <div className="md:flex bg-gray-50 items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img
                    className="w-full"
                    alt="image of a girl posing"
                    src={imgUrl}
                />
                
            </div>
            <div className="md:hidden">
                <img
                    className="w-full"
                    alt="imgUrl of a girl posing"
                    src={imgUrl}
                />
                
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <div className='flex justify-between'>
                        <p className="text-sm leading-none  mb-4 text-blue-500 ">
                            {user_name}
                        </p>
                       
                    </div>
                    <h1 className="lg:text-4xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-black mt-4">
                      Category:  {subcategory_Name}
                    </h1>
                    <h1 className="lg:text-3xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-black mt-8">
                        Subcategory:  {item_name}
                    </h1>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800 dark:text-black">
                        Posting time
                    </p>
                    <div className="flex items-center  text-gray-600 dark:text-black justify-center">
                        <p>{processing_time}</p>
                    </div>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800 dark:text-black">
                        Rating
                    </p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600 dark:text-black mr-3">
                            {rating}
                        </p>

                    </div>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800 dark:text-black">
                        Status
                    </p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600 dark:text-black mr-3">
                            {stockStatus===1 &&<h1>Yes</h1>}
                            {stockStatus!==1 &&<h1>No</h1>}
                        </p>

                    </div>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800 dark:text-black">
                        Price
                    </p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600 dark:text-black mr-3">
                            ${price}
                        </p>

                    </div>
                </div>

                <div>
                    <h1 className='text-3xl text-blue-400 font-bold'>Description :</h1>
                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-900 mt-7 mb-6">
                        {description}
                    </p>

                </div>
                <Link to='/items' className=" rounded-2xl hover:border-none dark:bg-orange-600 dark:text-white hover:dark:bg-blue-800 hover:dark:text-white     text-base flex items-center justify-center leading-none text-white w-full py-4">
                    See other
                </Link>

            </div>
        </div>

    );
};

export default Details;
