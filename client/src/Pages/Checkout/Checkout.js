import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const { user } = useAuth();
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
            setCartItems(JSON.parse(localStorage.getItem('cart')));
     },[])

    const handleChange = (e) => {
        const field = e.target.name;
        const newData = { ...formData, [field]: e.target.value };
        setFormData(newData);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();  

        // setFormData({ ...formData, date: new Date(), order: cartItems, approved: false });

        axios.post('https://groci.herokuapp.com/api/order', { ...formData,name:user.displayName,email:user.email, date: new Date(), order: cartItems, approved: false })
            .then(res => {
                if (res.data.acknowledged===true) {
                    localStorage.removeItem('cart');
                    navigate('/dashboard');
                }
            }).catch(err => console.log(err));
        
    };

    return (
        <>
            <Header />
            <div className="container mx-auto flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5">
                
            <table className='w-full bg-white my-10 rounded-lg text-center '>
                    <thead>
                        <tr>
                        <th className='p-5'>Product</th>
                        <th className='p-5'>Price</th>
                        <th className='p-5'>Quantity</th>
                        <th className='p-5'>Subtotal</th>
                        </tr>
                    </thead>  
                    <tbody>
                        {cartItems?.map(item => (
                            <tr key={item._id}>
                                <td className='p-5 flex justify-center items-center gap-2'>
                                    <img src={item.image } alt={item.name} className='w-20 h-20 hidden md:inline-block'/> <span>{item.name}</span>
                                </td>
                                <td className='p-5'>${item.price}</td>
                                <td className='p-5'>{item.count}</td>
                                <td className='p-5'>${(item.price * item.count).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot >
                        <tr>
                            <td colSpan={4} className='py-10 space-y-5'>
                                <h3 className='text-xl uppercase text-center font-semibold tracking-wider'>Total ${cartItems?.reduce((acc, item) => acc + (item.price * item.count), 0).toFixed(2)}</h3>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <div className=' my-10'>
                    <form className="w-full bg-white p-5 rounded space-y-5" onSubmit={handleSubmit}>
                      <input type="text" name="name"  className="block w-full p-4 focus:outline-none bg-gray-100 rounded text-gray-600" defaultValue={user?.displayName} onBlur={handleChange}/>
                    <input type="text" name="address" placeholder='Enter your address' className="block w-full p-4 focus:outline-none bg-gray-100 rounded text-gray-600" onBlur={handleChange}/>
                    <input type="text" name="phone" placeholder='Enter your phone number' className="block w-full p-4 focus:outline-none bg-gray-100 rounded text-gray-600" onBlur={handleChange}/>
                    <button type="submit" className="bg-green-500 px-3 py-2 uppercase bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded">Order</button>
                    </form>
                </div>
            </div>
            <Footer />   
        </>
    );
};

export default Checkout;