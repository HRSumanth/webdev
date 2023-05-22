import './CandyList.css'
import CandyItem from './CandyItem';
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

const CandyList =()=>{
  const {addedItems} = useContext(CartContext)
 

    return (
      
            <div className='candies'>
            {addedItems.map((Candy,index)=>
             <ul>
                <CandyItem key={index} Candy={Candy}></CandyItem>
             </ul>
               
            )}
            </div>
    )

}

export default CandyList