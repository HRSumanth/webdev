import './ProductList.css'
import ProductItem from './ProductItem';
import { useContext } from 'react';
import CartContext from '../Store/CartContext';


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const ProductList =()=>{
  const {addedItems} = useContext(CartContext)
 console.log(addedItems)

    return (
      
            <div className='candies'>
              <div className='Details-Name'>
                <h3>Product Name</h3>
                <h3>Discription</h3>
                <h3>Price</h3>
                <h3>Quantity</h3>
                </div>
            {addedItems.map((product,index)=>
             <ul>
                <ProductItem key={index} product={product}></ProductItem>
             </ul>
               
            )}
            </div>
    )

}

export default ProductList