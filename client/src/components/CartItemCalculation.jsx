import React from 'react';

const CartItemCalculation = () => {
    return (
        <div id="summary" className="w-full sm:w-full p-4 mg:p-0 lg:py-10 md:w-11/12 x-8 ">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Items 3</span>
                <span className="font-semibold text-sm">$590</span>
            </div>
            <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                    <option>Standard shipping - $10.00</option>
                </select>
            </div>
            <div className="py-10">
                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                <input
                    type="text"
                    id="promo"
                    placeholder="Enter your code"
                    className="p-2 text-sm w-full"
                />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Apply
            </button>
            <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>$600</span>
                </div>
                <button className="bg-blue-600 font-semibold hover:bg-blue-800 py-3 text-sm text-white uppercase w-full">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CartItemCalculation;