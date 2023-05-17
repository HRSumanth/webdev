import React,{useRef,useState} from "react";


import "./Input.css";

const Input = ({onAddItems}) => {

   const [formIsValid, setFormaIsValid]= useState(false)
   const productId=useRef()
   const sellingPrice=useRef()
   const productName=useRef()
   const category=useRef()
  
   const formSubmitHandler =(event)=>{
    event.preventDefault()
    if (productId.current.value.trim().length !==0 || sellingPrice.current.value.trim().length !==0 ||
   productName.current.value.trim().length !==0 || category.current.value.trim().length !==0){
    setFormaIsValid(true)
   }

   onAddItems(productId.current.value,sellingPrice.current.value,productName.current.value,category.current.value)
   }

  return (
    <form  className="form" onSubmit={formSubmitHandler}>
      <div className="control">
        <label >Product ID</label>
        <input
          ref={productId}
          type="text"
          id="amount"
      
        />
      </div>
      <div className="control">
        <label >Selling Price</label>
        <input
        ref={sellingPrice}
          type="number"
          id="dish"
          min='1'
         
        />
      </div>
      <div className="control">
        <label >Product Name</label>
        <input
        ref={productName}
          type="text"
          id="dish"
        />
      </div>
      <div className="control">
        <label htmlFor="select-expense">
          Choose a Category
        </label>
        <select
        ref={category}
          id="Category"
        >
          <option value="">--Choose a table--</option>
          <option value="Electronic Items">Electronic Items</option>
          <option value="Food Items">Food Items</option>
          <option value="Skincare Items">Skincare Items</option>
        </select>
      </div>

      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};

export default Input;
