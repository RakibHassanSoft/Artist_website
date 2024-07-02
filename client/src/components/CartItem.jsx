import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../Provider/AuthProvider';

const CartItem = ({ data, userId, onDeleteItem }) => {
    const { _id, subcategory_Name, processing_time, item_name, price, image,imgUrl } = data;
    const { user } = useContext(AuthContext);

    const deleteItem = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                fetch(`https://galary-backend-1.onrender.com/arts/${user.email}/${_id}`, {
                    method: 'DELETE',
                }).then(res => res.json())
                  .then(() => {
                    onDeleteItem(_id);
                    swal("Item deleted successfully!", {
                        icon: "success",
                    });
                }).catch(error => {
                    console.error('Error:', error);
                    swal("Failed to delete item", {
                        icon: "error",
                    });
                });
            } else {
                swal("Your item is safe!");
            }
        });
    };

    return (
        <div className='w-11/12'>
            <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50 w-full">
                <div className="md:w-4/12 2xl:w-1/4 w-full">
                    <img src={imgUrl} alt="Item" className="h-44 object-center object-cover md:block hidden" />
                    <img src={imgUrl} alt="Item" className="md:hidden w-full h-full object-center object-cover" />
                </div>
                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                    <p className="text-2xl leading-3 text-gray-800 md:pt-0 pt-4">{subcategory_Name}</p>
                    <div className="flex items-center justify-between w-full mt-3">
                        <p className="text-base font-black leading-none text-gray-800">{item_name}</p>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 py-4">Time: {processing_time || '12.23'}pm</p>
                    <div className="flex items-center justify-between pt-5">
                        <p className="text-base font-black leading-none text-gray-800 mb-8">${price}</p>
                    </div>
                    <div className='flex '>
                        <button onClick={deleteItem} className='text-center rounded-lg p-2 text-white bg-blue-500 w-1/4 m-auto'>Delete</button>
                        <Link to={`update/${_id}`} className='text-center rounded-lg p-2 text-white bg-blue-500 w-1/4 m-auto'>Update data</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
