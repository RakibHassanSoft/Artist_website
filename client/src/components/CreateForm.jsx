import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
const CreateForm = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext)
        // console.log(user)
        const {email} = user
        // console.log(email)
        const handleSubmit = (event) => {
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
    
            // Check if any field is empty
            if (
                name === '' ||
                subcategory_Name === '' ||
                description === '' ||
                customization === '' ||
                processing_time === '' ||
                stockStatus === '' ||
                price === '' ||
                imgUrl === ''
            ) {
                alert("Please fill in all fields.");
                return;
            }
    
            // Validate URL format for imgUrl
            if (!isValidUrl(imgUrl)) {
                alert("Please enter a valid URL for the image.");
                return;
            }
    
            const item = {
                name,
                subcategory_Name,
                description,
                customization,
                processing_time,
                stockStatus,
                price,
                imgUrl,
                email,
            };
    
            fetch('https://galary-backend-1.onrender.com/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            })
            .then(res => res.json())
            .then(data => {
                swal({
                    title: "Congratulation",
                    text: "Item creation successfully done",
                    icon: "success",
                    button: "Done",
                });
                if (data.insertedId) {
                    console.log('item Added to the database')
                }
                navigate('/');
            });
        };
    
        const isValidUrl = (url) => {
            // Check if the URL starts with http://, https://, or ftp://
            return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
        };
    return (
        //https://i.pinimg.com/originals/65/b3/a7/65b3a70eb2bd5eeac48fef882e25b036.jpg
        <div className='pb-10'  style={{
            backgroundImage: `url("https://wallpaperaccess.com/full/43696.jpg")`,
            height: "cover", // You can adjust the height as needed
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>

        <div className='mt-5 pt-10 pb-10 '>
            <div className='bg-white p-5 lg:w-6/12 m-auto bg-opacity-70  rounded-t-full pb-6 '>
                <h1 className='text-3xl lg:text-5xl text-center pt-10 text-Black font-bold font-serif text-orange-500'>Create item</h1>
            </div>
            <div className='flex justify-center w-8/12  rounded-3xl  m-auto bg-white bg-opacity-70'>
                <form action="" className='w-8/12 m-auto' onSubmit={handleSubmit}>
                    <div className='flex flex-col lg:flex-row lg:gap-10 w-full'>
                        {/* left side  */}
                        <div className='flex flex-col w-full  text-blue-500 font-bold'>
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
                        <div className='flex flex-col w-full items-center  text-blue-500 font-bold'>
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
                        <span className='text-2xl text-center text-blue-500 font-bold'>Image URL</span> <br />
                        <input className="input input-bordered w-[100%]" type="text" name="imgUrl" id="" />
                    </div>
                    <div className='flex w-full'>
                        <button className='btn w-4/12 m-auto text-2xl  text-blue-500 font-bold'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
        </div>
    );
};

export default CreateForm;