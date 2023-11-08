// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//   import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';


const ToysCard = ({item}) => {
  const {user} = useContext(AuthContext)
    const {name,sub_cagegory, picture, price, _id, quantity, seller} = item;

    const detail = () =>{
      if(!user){
        Swal.fire(
          {
            icon: 'warning',
            title: 'Oops...',
          text:'You have to log in first to view details.'
          }
        )
      }
    }
    return (
      <tr>
      {/* <th>
      <button  className="btn btn-sm ">
      <FontAwesomeIcon icon={faTrashAlt} />
</button>
      </th> */}
      <td>
          <div className="avatar">

            <div className="rounded w-24 h-24">
              {picture && <img src={picture} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
          
      </td>
      <td>
        {name}
      </td>
      <td className=''>{seller}</td>
      <td>{sub_cagegory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/details/${_id}`}><button onClick={detail} className='btn btn-primary'>View Details</button></Link>
      </th>
    </tr>
    );
};

export default ToysCard;
