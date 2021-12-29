import axios from 'axios';
import { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => { 
        axios.get('https://groci.herokuapp.com/api/items')
            .then(data => setItems(data.data))
            .catch(err=>console.log(err));
    }, []);

    const addItem = (item) => {

        axios.post('https://groci.herokuapp.com/api/additem', item)
            .then(data => {
                if (data.data.acknowledged) {
                    setItems([...items, { ...item, _id: data.data.insertedId }]);
                }
            })
            .catch(err => console.log(err));
    }

    const deleteItem = (id) => {
        axios.delete(`https://groci.herokuapp.com/api/deleteitem/${id}`)
            .then(data => {
                if (data.data.acknowledged) {
                    setItems(items.filter(item => item._id !== id));
                }
            })
            .catch(err => console.log(err));
    }

    return {items, setItems, addItem, deleteItem};
}

export default useItems;