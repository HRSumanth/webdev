import { useContext } from "react";
import CandyList from "./components/Meals/CandyList";
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
      <CandyList></CandyList>
      </main>
      </CartProvider>
       </div>
      
   
  );
}

export default App;
