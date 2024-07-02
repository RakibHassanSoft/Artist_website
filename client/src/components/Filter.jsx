import React from 'react';




const Filter = ({setFilter}) => {


    const handlSubmit = e => {
        e.preventDefault();
        const Customization = e.target.Customization.value;
  
        setFilter(Customization)
        console.log(Customization);
    }
    
    
    return (
        <div  data-aos="zoom-out"  className='  flex flex-col justify-center  m-auto mb-20'>
            <h1 className='text-6xl lg:before:w-[30%] text-black m-auto text-center font-bold mt-16 mb-16 font-mono  '>Search here</h1>
            <form action="" onSubmit={handlSubmit}>
                <div className='flex gap-4 m-auto'>

                    <div>
                        <h1 className='text-2xl text-center font-bold border  bg-orange-500 text-white rounded-t-xl font-mono'>Customization</h1>
                        <select className=" text-center text-blue-600 font-bold select select-bordered select-lg w-full " name='Customization'>
                            <option >Yes</option>
                            <option >No</option>

                        </select>
                    </div>
                    
                    
                    

                    
                    <div className='flex flex-col justify-center '>
                        <h1 className='text-2xl text-center font-mono border bg-orange-500 text-white rounded-t-xl font-bold '>Search</h1>

                        <button type='submit' className=" btn select-lg w-full bg-white text-2xl text-blue-800">
                            Click
                        </button>
                    </div>
                  
                </div>
            </form>

        </div>
    );
};

export default Filter;