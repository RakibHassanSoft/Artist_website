import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SpecialCard2 = (props) => {
    const { data } = props
    // console.log(data)
    const { _id, name, subcategory_Name, description, customization, processing_time, stockStatus, price, imgUrl, image } = data
    const { user } = useContext(AuthContext)
    //user data finding
    const [userDb, setUsetBackuserser] = useState(null);
    //  const {name} = userDb
    //  console.log(userDb?.email)

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!user?.email) {
                    // If user email is undefined or null, exit early
                    return;
                }
                const response = await fetch(`https://galary-backend-1.onrender.com/userByEmail/${user.email}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setUsetBackuserser(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Handle error here, if needed
            }
        };

        fetchData();
    }, [user]); // Make sure to include user in the dependency array


    //  console.log(userDb?._id)






    //  console.log(userDb?._id,userDb?.name,user?.email)

    const item = {
        _id: `${_id}`,
        image: `${image}`,
        item_name: `${name}`,
        subcategory_Name: `${subcategory_Name}`,
        description: `${description}`,
        price: `${price}`,
        User_email: `${user?.email}`,
        user_name: `${userDb?.name}`
    }
    const addItem = () => {
        fetch(`https://galary-backend-1.onrender.com/${userDb?._id}/addItem`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data) // comming from the send
                swal({
                    title: "Congratulation",
                    text: "item added sucessfully!",
                    icon: "success",
                    button: "Done",
                });
                if (data.insertedId) {
                    console.log('item Added to the database')
                }
            })
    }
    return (<div>
        <div className="overflow-x-auto">
            <h1>hi</h1>
                
        </div>
    </div>)

// return (
    //     <div className=" mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
    //         <div className="relative">
    //             <img
    //                 className="h-[35rem] w-full  transition ease-in-out duration-300 transform hover:scale-105 hover:shadow-outline"
    //                 src={image}
    //                 alt="Product Image"
    //             />


    //             <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium hover:-right-24 hover:duration-1000 ">
    //                 SALE
    //             </div>
    //         </div>
    //         <div className="p-4">
    //             <h3 className="text-lg font-medium mb-2">Product Title</h3>
    //             <p className="text-gray-600 text-sm mb-4">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
    //                 vel eros fermentum faucibus sit amet euismod lorem.
    //             </p>
    //             <div className="flex items-center justify-between">
    //                 <span className="font-bold text-lg">$19.99</span>
    //                 <button className="bg-orange-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    //                 <Link to={`/details/${_id}`}>Details page</Link>
    //                 </button>

                    // {
                    //     user &&(
                    //         <button className="bg-orange-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    //         <Link to={`update/${_id}`}>Update Item</Link>
                    //      </button>
                    //     )
                    // }
                    // {
                    //     user &&(
                    //         <button onClick={addItem} className="bg-orange-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    //         Add to cart
                    //     </button>
                    //     )
                    // }

    //             </div>
    //         </div>
    //     </div>

    // );
};

export default SpecialCard2;

{/* <Link to={`/details/${_id}`}>Details page</Link> */ }