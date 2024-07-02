import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const TableRow = ({ data }) => {
  const { _id, name, imgUrl, subcategory_Name, description, customization, processing_time, stockStatus, price, image } = data;
  //  console.log(imgUrl)
  const { user } = useContext(AuthContext)
  const [userDb, setUsetBackuserser] = useState(null);
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={imgUrl} alt="Avatar" />
            </div>
          </div>
          <div>
            <div className="font-bold">{subcategory_Name}</div>
            <div className="text-sm opacity-50">{description}</div>
          </div>
        </div>
      </td>
      <td>
        {subcategory_Name}
      </td>
      <td>{processing_time}</td>
      <td>{price}</td>
      <td>{stockStatus}</td>
      <td>

        <Link className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" to={`/details/${_id}`}>View Details</Link>

      </td>
    </tr>
  );
};

export default TableRow;
