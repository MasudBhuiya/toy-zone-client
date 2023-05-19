// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//   import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const ToysCard = ({item}) => {
    const {name,sub_cagegory, picture, price, _id, quantity, seller} = item;
    return (
      <tr>
      {/* <th>
      <button  className="btn btn-sm ">
      <FontAwesomeIcon icon={faTrashAlt} />
</button>
      </th> */}
      <td>
          <div className="avatar ">

            <div className="rounded w-24 h-24">
              {picture && <img src={picture} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
          
      </td>
      <td>
        {name}
      </td>
      <td>{seller}</td>
      <td>{sub_cagegory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/details/${_id}`}><button className='btn btn-primary'>View Details</button></Link>
      </th>
    </tr>
    );
};

export default ToysCard;
