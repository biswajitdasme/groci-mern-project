import { useState } from 'react';
import useItems from '../../../hooks/useItems';

function AddProduct() {
  const [formData, setFormData] = useState({});
  const {items, addItem,deleteItem} = useItems();

   const handleChange = (e) => {
    const field = e.target.name;
    const newData = { ...formData, [field]: e.target.value };
    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addItem(formData);

    e.target.reset();
  };

  return <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
    <div className=''>
       <form className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-5 bg-white p-5 rounded" onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Item Name" className="p-4 focus:outline-none bg-gray-100 rounded text-gray-600" name="name" onBlur={handleChange}/>
      <input type="text" placeholder="Enter Item Price" className="p-4 focus:outline-none bg-gray-100 rounded text-gray-600" name="price" onBlur={handleChange}/>
      <select name="category" id="category" className="p-4 focus:outline-none bg-gray-100 rounded text-gray-600 col-span-full" onBlur={handleChange}>
        <option value="">Select Category</option>
        <option value="vegetables">Vegetables</option>
        <option value="spices">Spices</option>
        <option value="bread">Bread</option>
        <option value="fruits">Fruits</option>
        <option value="drinks">Drinks</option>
      </select>
      <textarea type="text" placeholder="Enter Item Description" rows="5" className="bg-gray-100 border border-t-transparent border-x-transparent focus:outline-none resize-none p-4 w-full text-gray-600 col-span-full" name="details" onBlur={handleChange}/>
      <input type="text" placeholder="Enter Item Image URL" className="p-4 focus:outline-none bg-gray-100 rounded text-gray-600 col-span-full" name="image" onBlur={handleChange}/>
      <button type="submit" className="col-span-full bg-gray-700 text-xl tracking-wider text-white rounded cursor-pointer p-4">Add Item</button>
    </form>
   </div>

    <div className="bg-white p-8 rounded">
      <h1 className="text-4xl text-center font-bold tracking-wide">All Items</h1>
      <table className="table-auto w-full border">
        <thead>
          <tr className='uppercase tracking-wider'>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(item => (
              <tr key={item._id} className='border'>
                <td className="border p-2 text-center capitalize">{item.name}</td>
                <td className="border p-2 text-center capitalize">{item.category}</td>
                <td className="border p-2 text-center capitalize">{item.price}</td>
                <td className="border p-2 text-center capitalize">
                  <button type="button" className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded-md" onClick={()=>deleteItem(item._id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </div>
}

export default AddProduct;