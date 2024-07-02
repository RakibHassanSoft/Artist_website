import React, { useState } from 'react';
import CartItem from './CartItem';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';

const ShoppingCart = ({ cartData, userId }) => {
    const [cartItems, setCartItems] = useState(cartData);
    const navigate = useNavigate()
    const handleDeleteItem =  (itemId) => {
        const updatedCart = cartItems.filter(item => item._id !== itemId);
        setCartItems(updatedCart);
    };
   const clickHere =()=>{
    navigate('/items')
   }
    return (
        <div className="container mx-auto mt-10">
            <div className="flex sm:flex-col lg:flex-row shadow-md my-10">
                <div className="w-full sm:w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
                    </div>
                    <div className='flex flex-col'>
                        {
                            cartItems.length > 0 ? (
                                cartItems.map(data => (
                                    <CartItem
                                        key={data._id}
                                        data={data}
                                        userId={userId}
                                        onDeleteItem={handleDeleteItem}
                                    />
                                ))
                            ) : (
                                <h1 className='text-3xl text-orange-600 text-center font-bold mt-3 mb-80'>No data found</h1>
                            )
                        }
                    </div>
                    <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                            <path
                                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
                            />
                        </svg>
                        {

                        }
                       <Link  to="/items"> Continue Shopping</Link>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
