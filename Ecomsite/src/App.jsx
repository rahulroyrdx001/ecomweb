import React, { useEffect, useState } from "react";
import style from "./style/App.module.css";
import Search from "./components/Search";
import ProductCard from "./components/ProductCard";

function App() {
  const [users,setUsers] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    const fetchProduct = async () =>{
      try{
        const responds = await fetch('https://fakestoreapi.com/products');
        const data = await responds.json();
        setUsers(data);
        console.log(data)
      }catch(error){
          console.error('fetching user error',error);
      }finally{
        setLoading(false);
      }
    };
    fetchProduct()
  },[])


  return (
    <>
      <div className={style.home}>
        <Search></Search>
        <ProductCard product = {users}></ProductCard>
      </div>
    </>
  );
}

export default App;
