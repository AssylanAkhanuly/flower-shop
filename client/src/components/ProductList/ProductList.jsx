import React, { useEffect, useState } from 'react'
import "./productList.css";
import { gsap } from 'gsap';
import axios from 'axios';
function ProductList({productListVisible, setProductListVisible, setState, currentCategory, setSelectedItems}) {

  const [productList, setProductList] = useState([])


  useEffect(() => {
    if(productListVisible) RequestProducts()
    else Remove();
  }, [productListVisible])


  const Add =  () => {
    gsap.to(".product-list", {
      display: "block",
      left: "60%",
      right: "0",
      duration: 2,
      ease: "power3.inOut",
    })
  }

  const Remove = () => {
    gsap.to(".product-list", {
      display: "none",
      left: "100%",
      right: "-40%",
      duration: 2,
      ease: "power3.inOut",
    })
  }
  const RequestProducts = async () => {
    try {
      if(currentCategory) {
        const response = await axios.get("/api/products/getProducts", {
          params: {
            category: currentCategory,
          }
        })
        if(response) setProductList(response.data)
        Add();
      }
    } catch(e) {
      console.log(e)
    }
  }
  return (
    <div className="product-list" >
      <button onClick={() => {
        setProductListVisible(false)
        setState(1)
      }} className="close-button">
      </button>
      <div className="categories">
      <div className="category">
        <h2 className="category-header">Top Sellers</h2>
        <ul className="category-list">
          {
            productList.map(product => {
             return <li onClick={() => setSelectedItems(prev => [...prev, {...product, quantity: 1}])} key={product._id} className="category-list-item">
                <img className="category-list-item-img" src={product.img} alt="error"/>
                <p className="category-list-item-desc">{product.name}</p>
                <p className="category-list-item-price">{product.price} tg</p>
              </li>
            })
          }
        </ul>
      </div>
      </div>
      <button className="blue-button order-button">Order</button>
    </div>
  )
}

export default ProductList