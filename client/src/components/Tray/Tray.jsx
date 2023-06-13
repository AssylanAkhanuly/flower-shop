import React, { useEffect, useState } from 'react'
import "./tray.css"
import { gsap } from 'gsap'
import axios from 'axios'
function Tray({Switch, setTrayVisible, selectedItems, trayVisible, user}) {

    const [trayState, setTrayState] = useState(0)
    const [receiver, setReceiver] = useState(false)
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    useEffect(() => {
        if(trayVisible) Switch({finalRef: ".tray-page"})
        else Switch({initialRef: ".tray-page"})
    }, [trayVisible])

    useEffect(() => {
        if(receiver) {
            setPhone(user.phone) 
            setName(user.name)
        }
    }, [receiver])

    const Next = () => {
        gsap.to(".order-basket", {
            marginLeft: "calc(-100% - 10px)",
            marginRight: "calc(100% + 10px)",
            display: "none",
            ease: "power3.inOut",
            onComplete: () => {
                gsap.to(".order-receiver", {
                    marginLeft: "0",
                    marginRight: "0",
                    display: "block",
                    ease: "power3.inOut",
                    onComplete: () => {
                        setTrayState(trayState+1)
                    }
                })
            }
        })
       
    }

    const Return = () => {
        gsap.to(".order-receiver", {
            marginLeft: "calc(100% + 10px)",
            marginRight: "calc(-100% - 10px)",
            display: "none",
            ease: "power3.inOut",
            onComplete: () => {
                gsap.to(".order-basket", {
                    marginLeft: "0",
                    marginRight: "0",
                    display: "block",
                    ease: "power3.inOut",
                    onComplete: () => {
                        setTrayState(trayState-1)
                    }
                })
                
            }
        })
        
    }

    const Order = async() => {
        setError();
        setSuccess();
        console.log("a")
        try {
            const response = await axios.post("/api/orders/createOrder", {
                user,
                product: selectedItems,
                receiver: {
                    name,
                    address,
                    phone,
                }
            })
            if(response) setSuccess(true);
            else setError();
        }catch(e) {
            console.log(e)
            setError(true)
        }
    }
  return (
    <section className='tray-page' >
        <div className="form-box">
        <button onClick={() => setTrayVisible(false)} className="close-button"></button>
            <div className="form-value">
                    <h2 className='page-header'>Basket</h2>
                         <div className="order-basket">
                            <h3 className="order-header">Summary Information</h3>
                            <ul className="order-list">
                                {
                                    selectedItems.map((item, i) => {
                                       return  <li key={i} className="order-list-item">
                                        <img className='order-list-item-img' src={item.img} alt='error'/>
                                        <div className="order-list-item-desc">
                                            <h3 className="order-list-item-desc-name">Bouquet "{item.name}"</h3>
                                            <input value={item.quantity} type="number" className="order-list-item-desc-quantity" />
                                            <h3 className="order-list-item-desc-price">{item.price} tg</h3>
                                        </div>
                                </li>
                                    })
                                }
                            </ul>
                            <div className="order-summary">
                                <div className="order-summary-section">
                                    <p className="order-summary-delivery-title">Delivery</p>
                                    <p className="order-summary-delivery-title">Free</p>
                                </div>
                                <div className="order-summary-section">
                                    <h3 className="order-summary-sum-title">Total</h3>
                                    <h3 className="order-summary-sum-title">{selectedItems.reduce((acc, item) => acc + item.price, 0)}</h3>
                                </div>
                            </div>
                        </div>
                            <div className="order-receiver">
                            <h3 className="order-header">Receiver Information</h3>
                            <input checked={receiver} onChange={() => setReceiver(!receiver)} type="checkbox"/><label>Receiver is me  </label>
                                {
                                    !receiver && <div className="inputbox">
                                    <input  value={name} onChange={(e) => setName(e.target.value)}  type="text" required/>
                                    <label>Name</label>
                                </div> 
                                }
                            <div className="inputbox">
                            <ion-icon name="email-outline"></ion-icon>
                                <input  value={address} onChange={(e) => setAddress(e.target.value)}  type="text" required/>
                                <label>Address</label>
                            </div> 
                            {
                                !receiver && <div  className="inputbox">
                                <ion-icon name="phone-portrait-outline"></ion-icon>
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (123) 456 78 99" type="tel" required/>
                                    <label >Phone</label>
                                </div> 
                            }
                        </div>

                   
                    <div className="tray-buttons">
                        <button onClick={() => Return()} className='red-button order-Button'>Return</button>
                        <button onClick={() => trayState < 1 ? Next() : Order()} className='blue-button order-Button'>Order</button>
                    </div>
                    {error && <p className="error-text">Unable to create an order</p>}
                    {success && <p className="success-text">The order has been successfully created</p>}
            </div>
        </div>
    </section>
  )
}

export default Tray