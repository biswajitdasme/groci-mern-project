import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Context/useAuth';


const ManageOrders = () => {
    const [items, setItems] = useState([]);
    const { admin, user } = useAuth();
    const [orderedItems, setOrderedItems] = useState({});

    useEffect(() => {
        let fetchURL = 'https://groci.herokuapp.com/api/orders';
        if (!admin) fetchURL += `/${user.email}`;
        axios.get(fetchURL).then(res => setItems(res.data));
        
    }, [admin, user]);
    

    const handleApprove = (id) => {
        axios.put(`https://groci.herokuapp.com/api/approveorder/${id}`)
            .then(res => {
                 const prevItems = items.filter((item) => item._id !== id);
                 const currtentItem = items.find((item) => item._id === id);
                 currtentItem.approved = true;
                 setItems([...prevItems, currtentItem]);
             }).catch(err => console.log(err));
    }

    const deleteOrder = (id) => {
        axios.delete(`https://groci.herokuapp.com/api/deleteorder/${id}`)
            .then(res => {
                const prevItems = items.filter((item) => item._id !== id);
                setItems([...prevItems]);
                setOrderedItems({});
            }).catch(err => console.log(err));
    }

    return (
       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-white p-8 rounded">
                <h1 className="text-3xl text-center font-bold tracking-wide my-2">Manage Orders</h1>
                <table className="table-auto w-full border">
                <thead>
                    <tr className='uppercase tracking-wider'>
            <th>Name</th>
            <th>Mobile</th>
            <th>Date</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(item => (
              <tr key={item._id} className='border'>
                <td className="border p-2 text-center capitalize">{item.name}</td>
                <td className="border p-2 text-center capitalize">{item.phone}</td>
                <td className="border p-2 text-center capitalize">{new Date(item.date).toLocaleDateString()}</td>
                <td className="border p-2 text-center capitalize">{item.order.reduce((acc, product) => acc + (product.price * product.count), 0).toFixed(2)}</td>
                <td className="border p-2 text-center capitalize gap-2 flex flex-col lg:flex-row">
                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded-md" onClick={() => setOrderedItems(item)} >View</button>
                        
                        {
                            admin ?
                                ((item.approved) ?
                                    <button type="button" className="bg-gray-700 text-white px-2 py-1 rounded-md" disabled >Approved</button> :
                                    <button type="button" className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded-md" onClick={() => handleApprove(item._id)}>Approve</button>)
                                : (item.approved ? 'Approved' : 'Pending')
                        }
                  
                  <button type="button" className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded-md" onClick={()=>deleteOrder(item._id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
            </div>
            <div className="bg-white p-8 rounded">
                <h1 className="text-3xl text-center font-bold tracking-wide my-2">Ordered at { new Date(orderedItems.date).toLocaleDateString()}</h1>
      <table className="table-auto w-full border">
        <thead>
          <tr className='uppercase tracking-wider'>
            <th>Name</th>
            <th>Count</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            orderedItems?.order?.map(item => (
              <tr key={item._id} className='border'>
                <td className="border p-2 text-center capitalize">{item.name}</td>
                <td className="border p-2 text-center capitalize">{item.count}</td>
                <td className="border p-2 text-center capitalize">{item.price}</td>
                <td className="border p-2 text-center capitalize">{item.category}</td>
                
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default ManageOrders;