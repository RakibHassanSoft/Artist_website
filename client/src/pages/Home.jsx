import React, { useContext, useState } from 'react';
import MultioCarosel from '../components/MultioCarosel';
import Carosal from '../components/Carosal';
import Card from '../components/Card';
import CreateForm from '../components/CreateForm';
import Comments from '../components/Comments';
import SpecialCard from '../components/SpecialCard';
import ShoppingCart from '../components/ShoppingCart ';
import PricingForDetails from '../components/PricingForDetails';
import Contract from '../components/Contract';
import Pricing from '../components/Pricing';
import { useLoaderData } from 'react-router-dom';
import CategoriesSection from '../components/CategoriesSection';
import AuthProvider, { AuthContext } from '../Provider/AuthProvider';

const Home = () => {
    const {loading} = useContext(AuthContext)
    const loadedData = useLoaderData();
    const [visibleCount, setVisibleCount] = useState(6);
    const [datas, setDatas] = useState(loadedData);
    const nowCnt = datas.length - 6;

    const showMoreItems = () => {
        setVisibleCount(prevCount => prevCount + nowCnt); // Increase the number of items by the difference
    };
    return (
        
        <div>{
            loading &&<div className="w-44 text-center h-44 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 "></div>
            }
            {
                !loading && (
                    <div className='w-[98%] m-auto'>
                    <Carosal></Carosal>
                    <div className=''>
                <div>
                    <h1 className='text-center text-3xl lg:text-5xl font-serif font-bold mt-20 mb-5 text-orange-600'>All pictures</h1>
                    <p className='font-serif font-bold mt-8 mb-5 text-center'>here you will be able to see all the pictures</p>
                </div>
            </div>
                    {/* Your existing components */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-28 mb-16 w-11/12 m-auto'>
                        {datas.slice(0, visibleCount).map((data) => (
                            <SpecialCard key={data._id} data={data}></SpecialCard>
                        ))}
                    </div>
                    {visibleCount < datas.length && (
                        <div className='w-11/12 m-auto p-4'>
                            <button onClick={showMoreItems} className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                See More
                            </button>
                        </div>
                    )}
                    <CategoriesSection></CategoriesSection>
                    <Comments></Comments>
                    <Pricing></Pricing>
                    <Contract></Contract>
        
                    {/* <PricingForDetails></PricingForDetails> */}
                    <div className='h-90 border'>2 extra section</div>
                </div>
                )
            }
        </div>
     
    );
};

export default Home;


/*

import React, { useState } from 'react';
import MultioCarosel from '../components/MultioCarosel';
import Carosal from '../components/Carosal';
import Card from '../components/Card';
import CreateForm from '../components/CreateForm';
import Comments from '../components/Comments';
import SpecialCard from '../components/SpecialCard';
import ShoppingCart from '../components/ShoppingCart ';
import PricingForDetails from '../components/PricingForDetails';
import Contract from '../components/Contract';
import Pricing from '../components/Pricing';
import { useLoaderData } from 'react-router-dom';
import CategoriesSection from '../components/CategoriesSection';

const Home = () => {
    const loadedData = useLoaderData();
    const [visibleCount, setVisibleCount] = useState(6);
    const [datas, setDatas] = useState(loadedData);
    const nowCnt = datas.length - 6;


  const showMoreItems = () => {
        setVisibleCount(prevCount => prevCount + nowCnt); // Increase the number of items by 6
    };

    // console.log("Datas:", datas);



    return (
        <div className='w-[98%] m-auto'>
            <Carosal></Carosal>
            <div className='flex flex-col justify-center items-center p-3 mt-10 mb-10'>
                <h1 className='text-5xl font-bold'>This is the item</h1>
                <p>This items are created by our designer and the arts of our deisgners are very good</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {datas.slice(0, visibleCount).map((data) => (
                    <SpecialCard key={data._id} data={data}></SpecialCard>
                ))}
            </div>
            {visibleCount < datas.length && (
                <div className='w-11/12 m-auto p-4'>

                    <button onClick={showMoreItems} className=" mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        See More
                    </button>
                </div>
            )}
            
            <CategoriesSection></CategoriesSection>
            <Comments></Comments>
            <Pricing></Pricing>
            <Contract></Contract>

            <div className='h-90 border'>2 extra section</div>
        </div>
    );
};

export default Home;


*/