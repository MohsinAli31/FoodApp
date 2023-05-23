import React,{ useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import './App.css'
import Meals from "./Meals";
import MEALS from './data';
import ProductDetailsPage from "./ProductDetailsPage"


function App() {
  const [cartItems,setCartItems]=useState([])
  const [products,setProducts]=useState(MEALS)
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(MEALS);

  function removeFromCart(item){
    const cart=[...cartItems];
    let remainingItems = [];
    if(item.quantity > 1){
      const presemntItem = cart.find((c)=>c.id == item.id)
      presemntItem.quantity -- ;
      presemntItem.totalPrice = presemntItem.quantity * presemntItem.price
      setCartItems(cart)
    }
    else{
        cart.map((i)=>{
          if(i.id !== item.id){
            remainingItems.push(i);
          }
        })
        setCartItems(remainingItems)
    }
  }
  function addCartItems(item){
    const cart=[...cartItems];
      const presemntItem = cart.find((c)=>c.id == item.id)
      presemntItem.quantity ++ ;
      presemntItem.totalPrice = presemntItem.quantity * presemntItem.price
      setCartItems(cart)
  }
  function addToCart(items) {
    const cart=[...cartItems];
    const alreadyPresent = cart.find((c)=>c.id == items.id)
    if(alreadyPresent){
      alreadyPresent.quantity ++;
      alreadyPresent.totalPrice = alreadyPresent.quantity * alreadyPresent.price
    }
    else{
      cart.push(items)
    }

    console.log("alreadyPresent",alreadyPresent)
    
    setCartItems(cart)
  }
  function searchCart(searchTerm) {
    setFilteredProducts(MEALS.filter((product) =>{
    return product.name.toLowerCase().includes(searchTerm.toLowerCase())
  }
  ))
    if(searchTerm == ""){
      console.log('Empty Case!')
      setFilteredProducts(MEALS)
    }
    // debugger
    setProducts(filteredProducts)
  }
  // return (
  //   <div className="App">
  //     <Navbar addCartItems={addCartItems} removeFromCart={removeFromCart} searchCart={searchCart} cartItems={cartItems}/>
  //     <Meals addToCart={addToCart} products={filteredProducts} addCartItems={addCartItems} removeFromCart={removeFromCart}></Meals>
  //   </div>
  // );
  return (
    <Router>
      <div className="App">
        <Navbar
          addCartItems={addCartItems}
          removeFromCart={removeFromCart}
          searchCart={searchCart}
          cartItems={cartItems}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals addToCart={addToCart} products={filteredProducts} addCartItems={addCartItems} removeFromCart={removeFromCart}></Meals>} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />

        </Routes>
      </div>
    </Router>
  );
}
function Home() {
  return <h1>Welcome to the Home page</h1>;
}

export default App;
