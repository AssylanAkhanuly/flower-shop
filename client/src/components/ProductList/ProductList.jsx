import React, { useEffect, useState } from "react";
import "./productList.css";
import { gsap } from "gsap";
import axios from "axios";


export const AddItem = (selectedItems, setSelectedItems, newItem) => {
  console.log(newItem)
  var foundIndex = selectedItems.findIndex(item => item._id === newItem._id)
  var copyArray = [...selectedItems]
  console.log(foundIndex)
  if(!foundIndex) {
    copyArray[foundIndex].quantity++
  }
  else {
    copyArray = [...copyArray, {
      ...newItem,
      quantity: 1,
    }]
  }
  setSelectedItems(copyArray)
}

function ProductList({
  productListVisible,
  setProductListVisible,
  setState,
  currentCategory,
  setSelectedItems,
  setTrayVisible,
  selectedItems,
}) {
  const [productList, setProductList] = useState([]);
  const [pending, setPending] = useState(false);
  useEffect(() => {
    if (productListVisible) RequestProducts();
    else Remove();
  }, [productListVisible]);

  

  const Add = () => {
    gsap.to(".product-list", {
      display: "block",
      bottom: "0%",
      top: "60%",
      duration: 1,
      ease: "power3.inOut",
    });
  };

  const Remove = () => {
    gsap.to(".product-list", {
      display: "none",
      bottom: "-40%",
      top: "100%",
      duration: 1,
      ease: "power3.inOut",
    });
  };
  const RequestProducts = async () => {
    Add();
    setPending(true);
    try {
      if (currentCategory) {
        const response = await axios.get("/api/products/getProducts", {
          params: {
            category: currentCategory,
          },
        });
        if (response) {
          setProductList(response.data);
          setPending(false);
        }
      }
    } catch (e) {
      console.log(e);
      setPending(false);
    }
  };
  return (
    <div className="product-list">
      <button
        onClick={() => {
          setProductListVisible(false);
          setState(1);
        }}
        className="close-button"
      ></button>
      {!pending ? (
        <div className="categories">
          <div className="category">
            <h2 className="category-header">Top Sellers</h2>
            <ul className="category-list">
              {productList.map((product) => {
                return (
                  <li
                    onClick={() =>
                      AddItem(selectedItems, setSelectedItems, product)
                    }
                    key={product._id}
                    className="category-list-item"
                  >
                    <img
                      className="category-list-item-img"
                      src={product.img}
                      alt="error"
                    />
                    {selectedItems.find((item) => item._id === product._id) && (
                      <span className="category-list-item-quantity">
                        {selectedItems.find((item) => item._id === product._id).quantity}
                      </span>
                    )}
                    <p className="category-list-item-desc">{product.name}</p>
                    <p className="category-list-item-price">
                      {product.price} tg
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            onClick={() => setTrayVisible(true)}
            className="primary-button order-button"
          >
            Order
          </button>
        </div>
      ) : (
        <div className="loading-circle-container">
        <div className="loading-circle"></div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
