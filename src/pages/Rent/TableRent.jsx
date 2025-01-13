import React from 'react'
import { Link } from "react-router-dom";
import DeleteRent from './DeleteRent';

const TableRent = ({ rents , cars, users, onDeleteRent }) => {

  const handleDeleteRent = (rentId) => {
    console.log("Sending by delete button:", rentId); 
    onDeleteRent(rentId);
  };

  // if (!Array.isArray(rents) || rents.length === 0) {
  //   return <h2>No existen rentas registradas</h2>;
  // }
  //alert(rents.length);

  

  if (rents.length === 0) {
    return <h2>No existen rentas registrados</h2>
  } else {
    return(
      
      <div className='grid auto-rows-min gap-2 text-center'>
       
                <table className='border-collapse border border-slate-400'>
                    <thead>
                        <tr>
                        <th className='px-4 py-3'>ID</th>
                        <th className='px-4 py-3'>User</th>
                        <th className='px-4 py-3'>Car</th>
                        <th className='px-4 py-3'>Days</th>
                        <th className='px-4 py-3'>Price</th>
                        <th className='px-4 py-3'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                          
                          rents.map((item) => {
                            return (

                            <tr key={item.id}>                           
                                <td className='px-4 py-3' >{item.id}</td>
                                <td className='px-4 py-3' >{users.find((user)=>user.id ==item.user)?.name}</td>
                                <td className='px-4 py-3' >{cars.find((car)=>car.id ==item.car)?.name}</td>
                                <td className='px-4 py-3' >{item.days}</td>                        
                                <td className='px-4 py-3' >{item.price}</td>                        
                                <td className='px-4 py-3' >{item.total}</td>                        
                                <td className='px-4 py-3' >
                                    
                                <Link to={`/edit-rent/${item.id}`}>
                                    {/* <i className="fa fa-pencil" aria-hidden="true">Edit</i> */}
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border
                                     border-green-700 rounded">Edit</button>
                                </Link>
                                
                                {/* <i className="fa fa-trash-o" aria-hidden="true" onClick={() => deleteCar(item.id)}>Delete</i> */}
                                <DeleteRent rentId={item.id} onDeleteRent={handleDeleteRent}/>
                                
                                </td>
                            </tr>
                            );
                        })}                            
                    </tbody>
                </table>                    
            </div>   
      
    );
  }

}

export default TableRent;
