import React from 'react';
import swal from 'sweetalert';
const UpdateForm = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const description = form.description.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const price = form.price.value;
        const imgUrl = form.imgUrl.value;
        const item = {
            name,
            subcategory_Name,
            description,
            customization,
            processing_time,
            stockStatus,
            price,
            imgUrl
        }
        console.log(item);
    };
    return (
        <div className='mt-10'>
            <div>
                <h1 className='text-5xl text-center'>THis is the from for Creating</h1>
            </div>
            <div className='flex justify-center w-11/12  m-auto'>
                <form action="" className='w-8/12 m-auto' onSubmit={handleSubmit}>
                    <div className='flex gap-3 w-full'>
                        {/* left side  */}
                        <div className='flex flex-col w-full items-center '>
                            <div className='w-full'>
                                <span className='text-2xl'>Name</span>
                                <br />
                                <input className="input input-bordered w-full " type="text" name="item_name" id="" />
                            </div>
                            <div className='w-full'>
                                <span className='text-2xl'>Subcategory name</span><br />
                                <input className="input input-bordered w-full " type="text" name="subcategory_Name" id="" />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="description" className="block mb-2 text-2xl">Description</label><br />
                                <textarea
                                    id="description"
                                    name="description"
                                    className="input input-bordered w-full  h-32" // Adjust height as needed
                                    placeholder="Enter description..."
                                ></textarea>
                            </div>


                        </div>
                        {/* right side  */}
                        <div className='flex flex-col w-full items-center '>
                            <div className='w-full'>
                                <span className='text-2xl'>Customization</span><br />
                                <input className="input input-bordered w-full " type="text" name="customization" id="" />
                            </div >
                            <div className='w-full'>
                                <span className='text-2xl'>Processing time</span><br />
                                <input className="input input-bordered w-full " type="text" name="processing_time" id="" />
                            </div>
                            <div className='w-full'>
                                <span className='text-2xl'>StockStatus</span><br />
                                <input className="input input-bordered w-full " type="text" name="stockStatus" id="" />
                            </div>
                            <div className='w-full'>
                                <span className='text-2xl'>price</span> <br />
                                <input className="input input-bordered w-full " type="text" name="price" id="" />
                            </div>


                        </div>
                    </div>
                    <div className='flex flex-col justify-center w-full  mt-9 mb-9'>
                        <span className='text-2xl text-center'>Image URL</span> <br />
                        <input className="input input-bordered w-[100%]" type="text" name="imgUrl" id="" />
                    </div>
                    <div className='flex w-full'>
                        <button className='btn w-4/12 m-auto'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateForm;