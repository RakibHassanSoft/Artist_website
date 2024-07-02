import React, { useContext, useEffect, useState } from 'react';
import ShoppingCart from '../components/ShoppingCart ';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const List = () => {
    // const { id } = useParams();
    const { user } = useContext(AuthContext)
    //  const [userDb, setUsetBackuserser] = useState(null);
    //  const {name} = userDb
    //  console.log(userDb?.email)
    console.log(user)



    const [cartData, setCartData] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://galary-backend-1.onrender.com/arts/${user?.email}`);
               
                const data = await response.json();
                if (!data) {
                    throw new Error('Failed to fetch data');
                }
                setCartData(data);
                // console.log(data)
            } catch (error) {
                console.error(error);
                // Handle error here, if needed
            }
        };
    
        fetchData();
    }, [user]);
 

    // console.log(cartData)
    return (
        <div>
            {
                cartData === null ? <>
                
                <div className="w-44 h-44 m-auto mb-[30rem] border-4 border-dashed rounded-full animate-spin mt-24 dark:border-violet-600"></div>
                </>
                :(

                    cartData === '' ? (
                        <>
    
                            <h1 className='text-4xl text-center font-bold text-orange-500 mt-10 mb-10'>Loading</h1>
                        </>
                    ) : (
                        <>
                            <ShoppingCart key={user?.email}  cartData={cartData} />
                        </>
                    )
                )

            }
            {/* {
                cartData?.length === 0 && <>
                <h1 className='text-4xl text-center font-bold text-orange-500 mt-10 mb-10'>No data</h1>
                </>
            } */}
            


        </div>
    );
};

export default List;
