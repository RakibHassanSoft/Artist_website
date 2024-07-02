import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const DetailsCategory = () => {

    const loadedData = useLoaderData()
    const [datas, setDatas] = useState(loadedData)
    // console.log(datas)


    const { itemId } = useParams()
    // console.log(itemId)

    const singleData = datas.find(d => d?._id === itemId);
    console.log(singleData)

   
     const { description,image, subcategory_Name } = singleData;
    return (
      
        <div className="md:flex bg-gray-400 items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img
                    className="w-full"
                    alt="image of a girl posing"
                    src={image}
                />
                
            </div>
            <div className="md:hidden">
                <img
                    className="w-full"
                    alt="imgUrl of a girl posing"
                    src={image}
                />
                
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div>
                    <h1 className='text-4xl text-orange-400 font-bold '>{subcategory_Name}</h1>
                    

                </div>

                <div>
                    <h1 className='text-3xl text-blue-400 font-bold'>Description :</h1>
                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-900 mt-7 mb-6">
                        {description}
                    </p>

                </div>
                <Link to='/' className=" rounded-2xl hover:border-none dark:bg-orange-600 dark:text-white hover:dark:bg-blue-800 hover:dark:text-white     text-base flex items-center justify-center leading-none text-white w-full py-4">
                    See other
                </Link>

            </div>
        </div>

    );
};

export default DetailsCategory;
