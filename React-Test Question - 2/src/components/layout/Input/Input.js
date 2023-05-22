import React, { useRef,useContext } from "react";
import CartContext from "../../Store/CartContext";
import "./Input.css";

const Input = () => {
  const {addNewItems}=useContext(CartContext)

  const productId = useRef();
  const sellingPrice = useRef();
  const productName = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredProductId = productId.current.value.trim();
    const enteredSellingPrice = sellingPrice.current.value.trim();
    const enteredProductName = productName.current.value.trim();

    if (
      enteredProductId !== "" &&
      enteredSellingPrice !== "" &&
      enteredProductName !== "" 
     
    ) {
      addNewItems(
        {
          id:Math.random(),
          name:enteredProductId,
          price:enteredSellingPrice,
          discription: enteredProductName
        }
        
      );
      }
    productId.current.value=''
    sellingPrice.current.value=''
    productName.current.value=''
   

  };

  return (

 <form className="input-form" onSubmit={formSubmitHandler}>
      <div className="input-control">
        <label>Product Name</label>
        <input ref={productId} type="text" id="amount" />
      </div>
      <div className="input-control">
        <label>Selling Price</label>
        <input
          ref={sellingPrice}
          type="number"
          id="dish"
          min="1"
        />
      </div>
      <div className="input-control">
        <label>Product Discription</label>
        <input ref={productName} type="text" id="dish" />
      </div>
      <button type="submit" className="input-button">
        Add Candy
      </button>
      
    </form>
 
  );
};

export default Input;
