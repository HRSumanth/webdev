import { useContext } from "react";
import ProductList from "./components/Products/ProductList";
import CartProvider from "./components/Store/CartProvider";
import NavBar from "./components/layout/NavBar";
import CartContext from "./components/Store/CartContext";

function App() {

  const ctx= useContext(CartContext)
  console.log(ctx.addedItems,ctx.items)
  return (
       <div>
      <CartProvider>
      <NavBar></NavBar>
      <main>
      <ProductList></ProductList>
      </main>
      </CartProvider>
       </div>
      
   
  );
}

export default App;
