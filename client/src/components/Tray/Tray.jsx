import React, { useEffect, useState } from "react";
import "./tray.css";
import { gsap } from "gsap";
import axios from "axios";
function Tray({
  Switch,
  setTrayVisible,
  selectedItems,
  setSelectedItems,
  trayVisible,
}) {
  const [trayState, setTrayState] = useState(0);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  useEffect(() => {
    if (trayVisible) Switch({ finalRef: ".tray-page" });
    else Switch({ initialRef: ".tray-page" });
  }, [trayVisible]);

  const Order = async () => {
    setError();
    setSuccess();
    if (phone && name && address) {
      try {
        const response = await axios.post("/api/orders/createOrder", {
          product: selectedItems,
          receiver: {
            name,
            address,
            phone,
          },
        });
        if (response) setSuccess(true);
        else setError();
      } catch (e) {
        console.log(e);
        setError(true);
      }
    } else {
        setError(true);
    }
  };
  return (
    <section className="tray-page">
      <div className="form-box">
        
        {selectedItems.length ? (
          <div className="form-value">
            <button
          onClick={() => setTrayVisible(false)}
          className="close-button"
        ></button>
            <h2 className="page-header">Basket</h2>
            <div className="order-basket">
              <h3 className="order-header">Summary Information</h3>
              <ul className="order-list">
                {selectedItems.map((item, i) => {
                  return (
                    <li key={i} className="order-list-item">
                      <img
                        className="order-list-item-img"
                        src={item.img}
                        alt="error"
                      />
                      <div className="order-list-item-desc">
                        <h3 className="order-list-item-desc-name">
                          Bouquet "{item.name}"
                        </h3>
                        <h3 className="order-list-item-desc-price">
                          {item.price} tg
                        </h3>
                        <button
                          onClick={() =>
                            setSelectedItems(selectedItems.filter(filterItem => filterItem._id !== item._id))
                          }
                          className="delete-button"
                        >
                          <ion-icon
                            size="small"
                            name="trash-outline"
                          ></ion-icon>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="order-summary">
                <div className="order-summary-section">
                  <p className="order-summary-delivery-title">Delivery</p>
                  <p className="order-summary-delivery-title">Free</p>
                </div>
                <div className="order-summary-section">
                  <h3 className="order-summary-sum-title">Total</h3>
                  <h3 className="order-summary-sum-title">
                    {selectedItems.reduce((acc, item) => acc + item.price, 0)}
                  </h3>
                </div>
              </div>
            </div>

            <label htmlFor="name">Receiver</label>
            <input  value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" required />

            <label htmlFor="phone">Phone</label>
            <input  value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" type="tel" required />

            <label htmlFor="address">Address</label>
            <input value={address} onChange={(e) => setAddress(e.target.value)} id="address" type="text" required />
            <button
              onClick={() => Order()}
              className="blue-button order-Button"
            >
              Order
            </button>
            {error && <p className="error-text">Unable to create an order</p>}
            {success && (
              <p className="success-text">
                The order has been successfully created
              </p>
            )}
          </div>
        ) : (
          <div className="empty-tray-container">
            <h2 className="empty-text">You have no items in the basket</h2>
            <button onClick={() => setTrayVisible(false)} className="primary-button">Choose</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Tray;
