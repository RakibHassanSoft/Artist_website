import React, { useState } from 'react';
import Filter from '../components/Filter';
import SpecialCard from '../components/SpecialCard';
import { useLoaderData } from 'react-router-dom';
import SpecialCard2 from '../components/SpecialCard2';
import TableRow from '../components/TableRow';
const Items = () => {

  // const { _id, name, subcategory_Name, description, customization, processing_time, stockStatus, price, imgUrl, image } = data

  const loadedData = useLoaderData()
  // console.log(loadedData)
  const [datas, setDatas] = useState(loadedData)
  // console.log(datas)
  return (

    <div className='w-full md:w-11/12 lg:w-11/12 m-auto mb-72 mt-24'>

      <div className='flex flex-col justify-center items-center'>
         <h1 className='text-3xl lg:text-5xl text-orange-600 font-serif font-bold mt-5 mb-4'>All arts and Craft </h1>
         <p className='text-xl mb-5'>Here you will able to see all user picture and its details so that you can understand better</p>
      </div>
      <div className='flex justify-between border'>
        <div className="overflow-x-auto w-full">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
               
                <th>Name</th>
                <th>Subcategory</th>
                <th>Process time</th>
                <th>Price</th>
                <th>Time</th>
                <th>Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {datas.map((data) => (
                <TableRow key={data._id} data={data} />
              ))}
              {/* <tr>
                
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <td>Purple</td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr> */}

            </tbody>


          </table>
        </div>
        {/* {
          datas.map((data) => <SpecialCard2 key={data._id} data={data}></SpecialCard2>)
        } */}
      </div>
    </div>
  );
};

export default Items;