import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../Provider/AuthProvider';

const UpdatePage = () => {
   const navigate = useNavigate()
    const loadedData = useLoaderData()
    const [datas, setDatas] = useState(loadedData)
    // console.log(loadedData)

    const {user} = useContext(AuthContext)
    // console.log(user.email)
   
    const { itemId } = useParams()
    // console.log(itemId)

    const singleData = datas.find(d => d?._id === itemId);
    // console.log(singleData)

    // const { name, User_email, description, image, item_name, price, processing_time, rating, stockStatus, subcategory_Name } = singleData;
    const { name,image,processing_time,stockStatus,subcategory_Name,customization,description,price} = singleData;
    // console.log(singleData)
    //    console.log(name)
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
        console.log(user.email , itemId)
        console.log(item);
        fetch(`https://galary-backend-1.onrender.com/arts/${user.email}/${itemId}`,{
            method:'PUT',
            headers:{
               'Content-Type':'application/json',
            },
            body:JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data) // comming from the send
            swal({
                title: "Congratulation",
                text: "Account creation successfully done",
                icon: "success",
                button: "Done",
              });
            if(data.insertedId){
                console.log('item Added to the database')
            }
            navigate('/');
        })

    }
    return (
        <div  style={{
            backgroundImage: `url("https://wallpaperaccess.com/full/43696.jpg")`,
            height: "cover", // You can adjust the height as needed
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>

        <div className='mt-5 pt-10 pb-10'>
            <div className='bg-white p-5 lg:w-6/12 m-auto bg-opacity-70  rounded-t-full pb-6 '>
                <h1 className='text-3xl lg:text-5xl text-center pt-10 text-Black font-bold font-serif '>This is the from for Creating</h1>
            </div>
            <div className='flex justify-center w-8/12  rounded-3xl  m-auto bg-white bg-opacity-70'>
                <form action="" className='w-8/12 m-auto' onSubmit={handleSubmit}>
                    <div className='flex flex-col lg:flex-row lg:gap-10 w-full'>
                        {/* left side  */}
                        <div className='flex flex-col w-full  text-blue-500 font-bold'>
                            <div className='w-full'>
                                <span className='text-2xl'>Name</span>
                                <br />
                                <input className="input input-bordered w-full " type="text" name="item_name" placeholder={`${name}`} id="" required/>
                            </div>
                            <div className='w-full'>
                                <span className='text-2xl'>Subcategory name</span><br />
                                <input className="input input-bordered w-full " type="text" placeholder={`${subcategory_Name}`} name="subcategory_Name" id=""  required/>
                            </div>
                            <div className='w-full'>
                                <label htmlFor="description" className="block mb-2 text-2xl">Description</label><br />
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder={`${description}`}
                                    required
                                    className="input input-bordered w-full  h-32" // Adjust height as needed
    
                                ></textarea>
                            </div>


                        </div>
                        {/* right side  */}
                        <div className='flex flex-col w-full items-center  text-blue-500 font-bold'>
                            <div className='w-full'>
                                <span className='text-2xl'>Customization</span><br />
                                <input className="input input-bordered w-full " type="text" name="customization" placeholder={`${!customization && "No"}`} id="" required />
                            </div >
                            <div className='w-full'>
                                <span className='text-2xl'>Processing time</span><br />
                                <input placeholder={`${processing_time}`} className="input input-bordered w-full " type="text" name="processing_time" id="" />
                            </div>
                            <div className='w-full'>
                                <span className='text-2xl'>StockStatus</span><br />
                                <input className="input input-bordered w-full " type="text" placeholder={`${stockStatus}`} name="stockStatus" required id="" />
                            </div>
                            <div className='w-full'>
                                <span className='text-2xl'>price</span> <br />
                                <input className="input input-bordered w-full " type="text" placeholder={`${price}`} name="price" id="" required />
                            </div>


                        </div>
                    </div>
                    <div className='flex flex-col justify-center w-full  mt-9 mb-9'>
                        <span className='text-2xl text-center text-blue-500 font-bold'>Image URL</span> <br />
                        <input placeholder={`${image}`} className="input input-bordered w-[100%]" type="text" name="imgUrl" id="" required />
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

export default UpdatePage;
